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
      <div aria-hidden="true" className="loader">
        <svg className="loader-defs" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="loader-goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                result="goo"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <mask height="100" id="loader-clipping" maskUnits="userSpaceOnUse" width="100" x="0" y="0">
              <g fill="white" filter="url(#loader-goo)" id="loader-shapes">
                <circle cx="50" cy="50" r="13" />
                <polygon points="50,5 61,38 39,38" />
                <polygon points="91,30 63,49 60,29" />
                <polygon points="84,76 60,60 68,40" />
                <polygon points="50,95 42,63 58,63" />
                <polygon points="16,76 40,58 33,40" />
                <polygon points="9,30 39,45 37,61" />
              </g>
            </mask>
          </defs>
        </svg>
        <div className="box" />
      </div>
      <span className="sr-only">Loading Chhath and Tihar</span>
    </div>
  )
}
