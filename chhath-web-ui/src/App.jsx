import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowRight, ArrowUp, Flame, Leaf, Sun } from 'lucide-react'
import Navbar from './components/Navbar'
import {
  ChhathScene,
  ClosingDiyas,
  DiyoMark,
  HeroScene,
  MarigoldDivider,
  TiharScene,
  TransitionDiyas,
} from './components/Scenes'
import { chhathDays, culturalNote, navLinks, themes, tiharDays } from './data/site'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

const themeIcons = {
  light: Sun,
  gratitude: Flame,
  renewal: Leaf,
}

const currentYear = new Date().getFullYear()

const betweenStars = [
  [12, 22],
  [22, 12],
  [35, 30],
  [48, 16],
  [61, 26],
  [74, 14],
  [86, 34],
  [18, 44],
  [54, 40],
  [80, 48],
  [42, 8],
  [66, 46],
  [90, 20],
  [8, 58],
  [30, 60],
]

export default function App() {
  const rootRef = useRef(null)
  const [lights, setLights] = useState(0)
  const [status, setStatus] = useState('')

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 900px)' },
      (context) => {
        if (!context.conditions.motion) return
        const root = rootRef.current
        if (!root) return

        const { desktop } = context.conditions

        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
        heroTimeline
          .from('.hero-kicker', { autoAlpha: 0, y: 14, duration: 0.7 }, 0.1)
          .from(
            '.hero-title .line',
            { autoAlpha: 0, yPercent: 55, duration: 1.1, stagger: 0.12 },
            0.2,
          )
          .from('.hero-copy', { autoAlpha: 0, y: 18, duration: 0.8 }, 0.72)
          .from('.hero-actions', { autoAlpha: 0, y: 18, duration: 0.75 }, 0.88)
          .from('.hero-foot', { autoAlpha: 0, y: 12, duration: 0.7 }, 1.05)
          .from(
            '.hero-scene-sun',
            { autoAlpha: 0, y: 30, scale: 0.96, transformOrigin: '50% 50%', duration: 1.6 },
            0.15,
          )
          .from('.hero-devotee', { autoAlpha: 0, y: 16, duration: 0.9, stagger: 0.12 }, 0.85)
          .from('.hero-diyo', { autoAlpha: 0, y: 8, duration: 0.8, stagger: 0.09 }, 0.95)

        if (desktop) {
          gsap.to('.hero-scene', {
            ease: 'none',
            scrollTrigger: {
              end: 'bottom top',
              scrub: true,
              start: 'top top',
              trigger: '.hero',
            },
            yPercent: 7,
          })

          gsap.to('.hero-main', {
            ease: 'none',
            scrollTrigger: {
              end: 'bottom top',
              scrub: true,
              start: 'top top',
              trigger: '.hero',
            },
            yPercent: -5,
          })
        }

        root.querySelectorAll('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            duration: 0.95,
            ease: 'power2.out',
            scrollTrigger: { once: true, start: 'top 88%', trigger: element },
            y: 30,
          })
        })

        root.querySelectorAll('[data-reveal-group]').forEach((group) => {
          const items = group.querySelectorAll('[data-reveal-item]')
          if (!items.length) return

          gsap.from(items, {
            autoAlpha: 0,
            duration: 0.82,
            ease: 'power2.out',
            scrollTrigger: { once: true, start: 'top 86%', trigger: group },
            stagger: 0.09,
            y: 26,
          })
        })

        gsap.to('.chhath-sun', {
          ease: 'none',
          scrollTrigger: {
            end: 'bottom top',
            scrub: true,
            start: 'top bottom',
            trigger: '#chhath',
          },
          yPercent: -6,
        })

        const betweenTimeline = gsap.timeline({
          scrollTrigger: {
            end: 'bottom 55%',
            scrub: 0.6,
            start: 'top 78%',
            trigger: '#between',
          },
        })

        betweenTimeline
          .fromTo('.dawn-wash', { opacity: 1 }, { ease: 'none', opacity: 0 }, 0)
          .fromTo('.night-wash', { opacity: 0 }, { ease: 'none', opacity: 1 }, 0)
          .fromTo(
            '.between-sun',
            { opacity: 1, scale: 1, yPercent: 0 },
            { ease: 'none', opacity: 0.45, scale: 0.88, yPercent: 55 },
            0,
          )
          .fromTo(
            '.transit-diya',
            { opacity: 0, scale: 0.7, transformOrigin: '50% 100%' },
            { ease: 'none', opacity: 1, scale: 1, stagger: 0.07 },
            0.1,
          )
          .fromTo('.between-stars', { opacity: 0 }, { ease: 'none', opacity: 1 }, 0.15)

        let active = true
        document.fonts?.ready.then(() => {
          if (active) ScrollTrigger.refresh()
        })

        return () => {
          active = false
        }
      },
      rootRef,
    )

    return () => mm.revert()
  }, [])

  const lightDiyas = () => {
    setLights((count) => count + 1)
    setStatus('Five diyas are lit. May the year hold light, gratitude, and good company.')
  }

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <section aria-labelledby="hero-title" className="hero grain" id="top">
          <div aria-hidden="true" className="hero-sky" />
          <HeroScene className="hero-scene" />
          <div aria-hidden="true" className="hero-scrim" />

          <div className="shell hero-inner">
            <div className="hero-main">
              <div className="hero-content">
                <p className="hero-kicker eyebrow">
                  <span aria-hidden="true" className="chapter-line" />
                  A story of light · Kartik
                </p>
                <h1 className="hero-title" id="hero-title">
                  <span className="line">Two festivals.</span>
                  <span className="line">
                    <em>One light.</em>
                  </span>
                </h1>
                <p className="hero-copy">
                  Chhath looks to the sun as it meets the river. Tihar answers with lamps in every
                  doorway. Different skies, the same gratitude — for life, for family, for what
                  carries us.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#story">
                    Begin the journey
                    <ArrowDown aria-hidden="true" size={17} strokeWidth={1.8} />
                  </a>
                  <a className="text-link" href="#tihar">
                    Explore Tihar
                    <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-foot">
              <span className="scroll-cue">
                <span aria-hidden="true" className="scroll-cue-line" />
                Scroll to follow the light
              </span>
              <div aria-hidden="true" className="hero-legend">
                <span>
                  <i className="sun-dot" />
                  Chhath · the sun
                </span>
                <span>
                  <i className="lamp-dot" />
                  Tihar · the lamp
                </span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="story-title" className="story-section section-pad grain" id="story">
          <span aria-hidden="true" className="ghost-num">
            00
          </span>
          <div className="shell relative z-10">
            <p className="chapter">
              <span className="chapter-num">00</span>
              <span aria-hidden="true" className="chapter-line" />
              Prologue
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="section-title max-w-[17ch]" data-reveal id="story-title">
                  Different skies.{' '}
                  <span className="serif-italic text-ember-600">The same upward gaze.</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="lead text-ink-900/75" data-reveal>
                  Chhath and Tihar are distinct traditions. One turns to the sun on the river; the
                  other fills the dark with lamps. Both gather people around a shared belief: that
                  light is something to be tended, and gratitude something to be offered.
                </p>
                <p className="serif-italic mt-5 text-xl leading-relaxed text-ink-900/65" data-reveal>
                  This is a short journey between the two — from a riverbank at sunrise to a
                  courtyard full of lamps.
                </p>
              </div>
            </div>

            <dl className="mt-12 grid gap-8 border-t border-ink-950/10 pt-7 sm:grid-cols-2 lg:mt-16">
              <div data-reveal>
                <dt className="eyebrow text-ember-600">Chhath</dt>
                <dd className="copy-sm mt-2 max-w-md text-ink-900/65">
                  Observed mainly in Bihar, Jharkhand, eastern Uttar Pradesh, and the Mithila region
                  of Nepal.
                </dd>
              </div>
              <div data-reveal>
                <dt className="eyebrow text-ember-600">Tihar</dt>
                <dd className="copy-sm mt-2 max-w-md text-ink-900/65">
                  Celebrated across Nepal and by Nepali communities elsewhere, over five days of
                  light and belonging.
                </dd>
              </div>
            </dl>

            <div className="themes" data-reveal-group>
              {themes.map((theme, index) => {
                const Icon = themeIcons[theme.id]
                return (
                  <article className="theme" data-reveal-item key={theme.id}>
                    <div className="theme-head">
                      <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                      <span className="theme-num">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="card-title">{theme.title}</h3>
                    <p className="copy-sm">{theme.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="chhath-title" className="chhath-section section-pad grain" id="chhath">
          <span aria-hidden="true" className="ghost-num">
            01
          </span>
          <div className="shell relative z-10">
            <p className="chapter">
              <span className="chapter-num">01</span>
              <span aria-hidden="true" className="chapter-line" />
              Chapter one · Chhath
            </p>

            <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <h2 className="section-title" data-reveal id="chhath-title">
                  Where the river{' '}
                  <span className="serif-italic text-ember-600">meets the sun.</span>
                </h2>
                <p className="lead mt-7 text-ink-900/78" data-reveal>
                  Four days of fasting, offering, and thanks to Surya, the sun — and to Chhathi
                  Maiya, honoured in these rites.
                </p>
                <p className="copy mt-5 text-ink-900/68" data-reveal>
                  Chhath is observed mainly in Bihar, Jharkhand, eastern Uttar Pradesh, and the
                  Mithila region of Nepal. Families gather at rivers, ponds, and ghats to offer
                  arghya — water and prayers lifted toward the setting sun, then again toward the
                  rising sun.
                </p>
                <p className="copy mt-4 text-ink-900/68" data-reveal>
                  The air carries the smell of thekua, the sound of songs, and the quiet purpose of
                  people standing together in the water. Many devotees keep a strict fast; traditions
                  differ from family to family.
                </p>
                <p
                  className="serif-italic mt-8 border-l border-ember-500/30 pl-5 text-xl leading-relaxed text-ember-600"
                  data-reveal
                >
                  First the setting sun, then the rising one — gratitude offered at both ends of the
                  night.
                </p>
              </div>

              <figure className="artwork lg:col-span-6" data-reveal>
                <div className="artwork-frame">
                  <span className="artwork-badge">Chhath · sunrise</span>
                  <ChhathScene />
                </div>
                <figcaption>
                  <em>An offering at the water’s edge</em>
                  <span>Illustration</span>
                </figcaption>
              </figure>
            </div>

            <div className="mt-16 border-t border-[rgba(84,52,24,0.16)] pt-8" data-reveal>
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="eyebrow text-ember-600">The rhythm</p>
                  <h3 className="title-md mt-3">Four days, one devotion.</h3>
                </div>
                <p className="copy-sm max-w-sm text-ink-900/60">
                  A four-day observance in many households, moving from preparation to offering.
                </p>
              </div>
            </div>

            <ol className="chhath-days mt-8" data-reveal-group>
              {chhathDays.map((day, index) => (
                <li className="chhath-day" data-reveal-item key={day.name}>
                  <span className="day-index">Day {String(index + 1).padStart(2, '0')}</span>
                  <h3 className="card-title">{day.name}</h3>
                  <p>{day.text}</p>
                </li>
              ))}
            </ol>
            <p className="note mt-5">
              Names, foods, and customs vary by region and household.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="between-title"
          className="between-section grain grain-dark on-dark"
          id="between"
        >
          <div aria-hidden="true" className="between-wash dawn-wash" />
          <div aria-hidden="true" className="between-wash night-wash" />
          <div aria-hidden="true" className="between-sun transit-sun" />
          <div aria-hidden="true" className="between-stars transit-stars">
            {betweenStars.map(([left, top], index) => (
              <span key={index} style={{ left: `${left}%`, top: `${top}%` }} />
            ))}
          </div>
          <div aria-hidden="true" className="between-horizon" />
          <TransitionDiyas className="between-diyas" />
          <div aria-hidden="true" className="between-scrim" />

          <div className="between-content">
            <p className="chapter justify-center text-cream-200/60">
              <span aria-hidden="true" className="chapter-line" />
              The space between
              <span aria-hidden="true" className="chapter-line" />
            </p>
            <h2 className="section-title mt-6 text-cream-50" data-reveal id="between-title">
              The light <span className="serif-italic text-marigold-300">changes hands.</span>
            </h2>
            <p className="lead mt-6 text-cream-200/75" data-reveal>
              A sun sinks into the river. A lamp is lifted in the doorway. The story does not end at
              sunset — it is passed on, small flame to small flame.
            </p>
            <div className="between-labels" aria-hidden="true">
              <span>
                <i />
                Chhath · the sun goes down
              </span>
              <span>
                <i />
                Tihar · the lamps come out
              </span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="tihar-title"
          className="tihar-section section-pad grain grain-dark on-dark"
          id="tihar"
        >
          <span aria-hidden="true" className="ghost-num">
            02
          </span>
          <div className="shell relative z-10">
            <p className="chapter">
              <span className="chapter-num">02</span>
              <span aria-hidden="true" className="chapter-line" />
              Chapter two · Tihar
            </p>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <figure className="artwork artwork--night order-2 lg:order-1 lg:col-span-6" data-reveal>
                <div className="artwork-frame">
                  <span className="artwork-badge">Tihar · after dusk</span>
                  <TiharScene />
                </div>
                <figcaption>
                  <em>Diyos at the threshold</em>
                  <span>Illustration</span>
                </figcaption>
              </figure>

              <div className="order-1 lg:order-2 lg:col-span-6">
                <h2 className="section-title text-cream-50" data-reveal id="tihar-title">
                  Five days of{' '}
                  <span className="serif-italic text-marigold-300">belonging.</span>
                </h2>
                <p className="lead mt-7 text-cream-200/78" data-reveal>
                  In Nepal and Nepali communities, Tihar honours the bonds that hold a household
                  together — people, animals, siblings, and the light that welcomes them home.
                </p>
                <p className="copy mt-5 text-cream-200/66" data-reveal>
                  Homes are cleaned, doorways are lit, and marigold garlands are strung across the
                  threshold. Over five days, Tihar turns everyday relationships into something
                  sacred: the crow’s message, the dog’s loyalty, the cow’s care, the bond between
                  siblings — and the lamp that invites Laxmi over the threshold.
                </p>
                <blockquote className="tihar-quote" data-reveal>
                  The lamp is small. The welcome is not.
                </blockquote>
              </div>
            </div>

            <div className="mt-16">
              <MarigoldDivider />
              <div className="mt-8 flex flex-wrap items-end justify-between gap-5" data-reveal>
                <div>
                  <p className="eyebrow text-marigold-300">The five days</p>
                  <h3 className="title-md mt-3 text-cream-50">Each day honours a bond.</h3>
                </div>
                <p className="copy-sm max-w-sm text-cream-200/55">
                  Names and order can vary. These are the days as they are commonly celebrated.
                </p>
              </div>

              <ol className="tihar-days mt-10" data-reveal-group>
                {tiharDays.map((day, index) => (
                  <li className="tihar-day" data-reveal-item key={day.name}>
                    <span className="tihar-num">{String(index + 1).padStart(2, '0')}</span>
                    <div className="tihar-day-head">
                      <h3 className="card-title">{day.name}</h3>
                      <span className="tihar-tag">{day.tag}</span>
                    </div>
                    <p className="tihar-day-copy">{day.text}</p>
                    <DiyoMark className="tihar-day-mark" size={22} />
                  </li>
                ))}
              </ol>
              <p className="note tihar-note mt-6">{culturalNote}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="light-title" className="closing-section section-pad grain" id="light">
          <div aria-hidden="true" className="closing-ornament" />
          <div className="shell relative z-10 text-center">
            <p className="eyebrow text-ember-600">A closing wish</p>
            <h2 className="section-title mx-auto mt-5 max-w-3xl" data-reveal id="light-title">
              Carry <span className="serif-italic text-ember-500">the light.</span>
            </h2>
            <p className="lead mx-auto mt-6 max-w-2xl text-ink-900/70" data-reveal>
              Chhath teaches us to look up. Tihar reminds us to come home. Between the two, a simple
              wish: that the light we tend for a few days stays with us for the year.
            </p>

            <div id="closing-light">
              <ClosingDiyas className="mx-auto" key={lights} lit={lights > 0} />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                aria-controls="closing-light"
                className="btn btn-primary"
                onClick={lightDiyas}
                type="button"
              >
                <DiyoMark size={18} />
                {lights > 0 ? 'Light them again' : 'Light the diyas'}
              </button>
              <a className="text-link" href="#top">
                Return to the beginning
                <ArrowUp aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            </div>

            <p className="closing-help">For gratitude. For the people beside you. For the road ahead.</p>
            <p aria-live="polite" className="sr-only" role="status">
              {status}
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5 text-cream-50">
                <DiyoMark className="text-marigold-400" size={28} />
                <span className="font-display text-2xl">
                  Chhath <em className="text-marigold-300">&amp;</em> Tihar
                </span>
              </div>
              <p className="copy-sm mt-4 max-w-sm text-cream-200/55">
                A short journey through light, gratitude, family, and renewal.
              </p>
            </div>

            <div>
              <p className="eyebrow text-cream-200/60">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a className="footer-link" href={`#${link.id}`}>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a className="footer-link" href="#light">
                    Light a diyo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-cream-200/60">A note</p>
              <p className="copy-sm mt-4 text-cream-200/55">
                A respectful introduction to two living traditions. Customs and names vary by region
                and household.
              </p>
            </div>
          </div>

          <div className="footer-rule" />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-cream-200/55">
              © {currentYear} Chhath &amp; Tihar. Made with warmth and respect.
            </p>
            <a aria-label="Back to top" className="back-top" href="#top">
              <ArrowUp aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
