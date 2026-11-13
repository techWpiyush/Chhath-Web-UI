import { useMemo } from 'react'

// Deterministic so StrictMode's double render and every re-render agree.
function lcg(seed) {
  let state = seed
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }
}

export function Embers({ className = '', count = 16, seed = 7, tone = 'warm' }) {
  const embers = useMemo(() => {
    const rand = lcg(seed)
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: 3 + rand() * 94,
      size: 1.5 + rand() * 2.8,
      drift: (rand() - 0.5) * 160,
      rise: 46 + rand() * 34,
      duration: 13 + rand() * 13,
      delay: -rand() * 26,
      peak: 0.28 + rand() * 0.45,
    }))
  }, [count, seed])

  return (
    <div aria-hidden="true" className={`embers embers--${tone} ${className}`}>
      {embers.map((ember) => (
        <span
          key={ember.id}
          style={{
            left: `${ember.left}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            '--drift': `${ember.drift}px`,
            '--rise': `${ember.rise}vh`,
            '--dur': `${ember.duration}s`,
            '--delay': `${ember.delay}s`,
            '--peak': ember.peak,
          }}
        />
      ))}
    </div>
  )
}