import { useEffect, useState } from 'react'

export default function StartupLoader() {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setPhase('exiting'), 1050)
    const removeTimer = window.setTimeout(() => setPhase('done'), 1500)

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
      <div aria-hidden="true" className="startup-spinner">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <span className="sr-only">Loading Chhath and Tihar</span>
    </div>
  )
}
