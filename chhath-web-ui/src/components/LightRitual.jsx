import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Check, RotateCcw, Sparkles } from 'lucide-react'
import { DiyaLamp, RitualDefs } from './Scenes'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { playBlessing, playDiya, playDim } from '../lib/sound'

const DEDICATIONS = ['The river', 'The sun', 'The table', 'The distance', 'The doorway']

const WISHES = [
  'Five small lamps, waiting for a hand.',
  'One for the river that carries us.',
  'Two — and for the sun that always comes back.',
  'Three — for the people who fed us.',
  'Four — for everyone far from home tonight.',
  'Five. The whole doorway is bright.',
]

const ALL_LIT = [true, true, true, true, true]
const NONE_LIT = [false, false, false, false, false]

export default function LightRitual() {
  const rootRef = useRef(null)
  const ctxRef = useRef(null)
  const lampRefs = useRef([])
  const flickerRefs = useRef([])
  const actionRefs = useRef([])
  const hintRef = useRef(null)
  const wasComplete = useRef(false)
  const [lit, setLit] = useState(NONE_LIT)
  const reduced = useReducedMotion()

  const count = lit.filter(Boolean).length
  const complete = count === 5

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (reduced) return

      flickerRefs.current = lampRefs.current.map((lamp, index) => {
        const flame = lamp.querySelector('.ritual-flame')
        const halo = lamp.querySelector('.ritual-halo')
        return gsap
          .timeline({ paused: true, repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } })
          .to(flame, { rotation: 4, scaleY: 1.28, scaleX: 0.88, duration: 0.46 + index * 0.1 }, 0)
          .to(flame, { rotation: -3.4, scaleY: 0.8, scaleX: 1.1, duration: 0.38 + index * 0.08 }, '>-0.05')
          .to(halo, { opacity: 0.96, scale: 1.1, duration: 0.8 + index * 0.12 }, 0)
      })

      const firstRing = lampRefs.current[0]?.querySelector('.ritual-ring')
      if (firstRing) {
        hintRef.current = gsap.fromTo(
          firstRing,
          { opacity: 0.55, scale: 0.5, transformOrigin: '50% 50%' },
          { opacity: 0, scale: 1.5, duration: 2.4, ease: 'power2.out', repeat: -1, repeatDelay: 1.1 },
        )
      }
    }, rootRef)

    ctxRef.current = ctx
    return () => {
      ctx.revert()
      ctxRef.current = null
      flickerRefs.current = []
      actionRefs.current = []
      hintRef.current = null
    }
  }, [reduced])

  const stopHint = useCallback(() => {
    hintRef.current?.kill()
    hintRef.current = null
  }, [])

  const ignite = useCallback(
    (index) => {
      const lamp = lampRefs.current[index]
      if (!lamp) return
      const flame = lamp.querySelector('.ritual-flame')
      const halo = lamp.querySelector('.ritual-halo')
      const ring = lamp.querySelector('.ritual-ring')
      const shadow = lamp.querySelector('.ritual-shadow')

      flickerRefs.current[index]?.pause()
      actionRefs.current[index]?.kill()

      // Killing by target would also tear the child tweens out of the flicker
      // timeline, so only the previous ignite/douse timeline is killed.
      actionRefs.current[index] = gsap
        .timeline({ onComplete: () => flickerRefs.current[index]?.restart() })
        .fromTo(
          flame,
          { autoAlpha: 0, scaleY: 0.18, scaleX: 0.55, transformOrigin: '50% 100%' },
          { autoAlpha: 1, scaleY: 1, scaleX: 1, duration: 0.72, ease: 'back.out(2.4)' },
          0,
        )
        .fromTo(
          halo,
          { autoAlpha: 0, scale: 0.45, transformOrigin: '50% 50%' },
          { autoAlpha: 1, scale: 1, duration: 0.95, ease: 'power2.out' },
          0,
        )
        .fromTo(
          ring,
          { autoAlpha: 0.85, scale: 0.3, transformOrigin: '50% 50%' },
          { autoAlpha: 0, scale: 2, duration: 1, ease: 'power2.out' },
          0,
        )
        .to(shadow, { opacity: 0.32, duration: 0.6, ease: 'power2.out' }, 0)
        .to(lamp, { y: -5, duration: 0.34, ease: 'sine.out' }, 0)
        .to(lamp, { y: 0, duration: 0.5, ease: 'sine.inOut' }, 0.34)
    },
    [],
  )

  const douse = useCallback((index) => {
    const lamp = lampRefs.current[index]
    if (!lamp) return
    const flame = lamp.querySelector('.ritual-flame')
    const halo = lamp.querySelector('.ritual-halo')
    const shadow = lamp.querySelector('.ritual-shadow')

    flickerRefs.current[index]?.pause()
    actionRefs.current[index]?.kill()

    actionRefs.current[index] = gsap
      .timeline()
      .to(flame, { autoAlpha: 0, scaleY: 0.2, duration: 0.42, ease: 'power2.in' }, 0)
      .to(halo, { autoAlpha: 0.08, duration: 0.5, ease: 'power2.inOut' }, 0)
      .to(shadow, { opacity: 0.14, duration: 0.5 }, 0)
      .to(lamp, { y: 0, duration: 0.4 }, 0)
  }, [])

  const toggle = (index) => {
    stopHint()
    const next = lit.slice()
    next[index] = !next[index]
    setLit(next)

    if (next[index]) {
      playDiya(index)
    } else {
      playDim()
    }

    ctxRef.current?.add(() => {
      if (reduced) return
      if (next[index]) {
        ignite(index)
      } else {
        douse(index)
      }
    })
  }

  const lightAll = () => {
    stopHint()
    const remaining = lit.map((value, index) => (value ? -1 : index)).filter((i) => i >= 0)
    if (!remaining.length) return
    setLit(ALL_LIT)

    remaining.forEach((index, order) => playDiya(index, order * 0.17))

    ctxRef.current?.add(() => {
      if (reduced) return
      remaining.forEach((index, order) => {
        gsap.delayedCall(order * 0.17, () => {
          ignite(index)
        })
      })
    })
  }

  const reset = () => {
    setLit(NONE_LIT)
    playDim()

    ctxRef.current?.add(() => {
      if (reduced) return
      lit.forEach((value, index) => {
        if (value) gsap.delayedCall((4 - index) * 0.08, () => douse(index))
      })
    })
  }

  useLayoutEffect(() => {
    if (complete && !wasComplete.current) {
      playBlessing()
      ctxRef.current?.add(() => {
        if (reduced) return
        gsap.fromTo(
          '.ritual-bloom',
          { autoAlpha: 0, scale: 0.82 },
          { autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
        )
        gsap.fromTo(
          '.ritual-blessing',
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.9, delay: 0.25, ease: 'power2.out' },
        )
      })
    }
    if (!complete && wasComplete.current) {
      ctxRef.current?.add(() => {
        if (reduced) return
        gsap.to('.ritual-bloom', { autoAlpha: 0, duration: 0.6, ease: 'power2.inOut' })
      })
    }
    wasComplete.current = complete
  }, [complete, reduced])

  return (
    <div className={`ritual ${complete ? 'is-complete' : ''}`} ref={rootRef}>
      <RitualDefs />
      <span aria-hidden="true" className="ritual-bloom" />

      <p className="ritual-invite">
        Touch a lamp to light it. Each one is held for someone.
      </p>

      <div className="ritual-row" role="group" aria-label="Five diyas to light">
        {DEDICATIONS.map((dedication, index) => (
          <button
            aria-pressed={lit[index]}
            className={`ritual-diya ${lit[index] ? 'is-lit' : ''}`}
            key={dedication}
            onClick={() => toggle(index)}
            ref={(node) => {
              lampRefs.current[index] = node
            }}
            type="button"
          >
            <DiyaLamp index={index} lit={lit[index]} />
            <span className="ritual-label">{dedication}</span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="ritual-wish" role="status">
        {WISHES[count]}
      </p>

      <div className="ritual-actions">
        <button
          className={`btn btn-primary ${complete ? 'is-done' : ''}`}
          disabled={complete}
          onClick={lightAll}
          type="button"
        >
          {complete ? (
            <Check aria-hidden="true" size={17} strokeWidth={2} />
          ) : (
            <Sparkles aria-hidden="true" size={17} strokeWidth={1.8} />
          )}
          {complete ? 'All five are lit' : count === 0 ? 'Light all five' : 'Light the rest'}
        </button>
        <button
          className="btn btn-quiet"
          disabled={count === 0}
          onClick={reset}
          type="button"
        >
          <RotateCcw aria-hidden="true" size={16} strokeWidth={1.8} />
          Begin again
        </button>
      </div>

      <p className="ritual-blessing" hidden={!complete}>
        May the year hold light, gratitude, and good company.
      </p>
    </div>
  )
}