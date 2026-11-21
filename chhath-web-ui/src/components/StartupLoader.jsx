import { useEffect, useState } from 'react'
import { DiyoMark } from './Scenes'

export default function StartupLoader() {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 180 : 520
    const exitTimer = window.setTimeout(() => setPhase('exiting'), delay)
    const removeTimer = window.setTimeout(() => setPhase('done'), delay + 350)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden={phase === 'exiting'}
      className={`startup-loader ${phase === 'exiting' ? 'is-exiting' : ''}`}
      role="status"
    >
      <div className="startup-brand">
        <DiyoMark className="startup-brand-mark" size={42} />
        <span>
          Chhath <em>&amp;</em> Tihar
        </span>
      </div>
      <span aria-hidden="true" className="startup-progress">
        <span />
      </span>
      <span className="sr-only">Loading Chhath and Tihar</span>
    </div>
  )
}
