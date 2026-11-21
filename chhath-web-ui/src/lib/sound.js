const STORAGE_KEY = 'chhath-tihar.sound'

// C5 D5 E5 G5 A5 — an ascending pentatonic run, one note per diya.
const NOTES = [523.25, 587.33, 659.25, 783.99, 880]

let audio = null
let master = null
let muted = readStoredMute()

function readStoredMute() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'off'
  } catch {
    return false
  }
}

function writeStoredMute(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value ? 'off' : 'on')
  } catch {
    /* storage unavailable — the in-memory flag still holds for this visit */
  }
}

export function isMuted() {
  return muted
}

export function setMuted(value) {
  muted = value
  writeStoredMute(value)
  if (master && audio) {
    master.gain.setTargetAtTime(value ? 0 : 0.16, audio.currentTime, 0.05)
  }
}

// Only ever called from a user gesture, so the context is allowed to start.
function context() {
  if (!audio) {
    const Ctor = window.AudioContext || window.webkitAudioContext
    if (!Ctor) return null
    audio = new Ctor()
    master = audio.createGain()
    master.gain.value = muted ? 0 : 0.16
    master.connect(audio.destination)
  }
  if (audio.state === 'suspended') audio.resume()
  return audio
}

function bell(freq, when, duration, peak) {
  const partials = [
    [1, 1],
    [2.02, 0.42],
    [2.78, 0.22],
    [5.41, 0.09],
  ]

  partials.forEach(([ratio, weight]) => {
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq * ratio
    gain.gain.setValueAtTime(0.0001, when)
    gain.gain.exponentialRampToValueAtTime(peak * weight, when + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration / ratio)
    osc.connect(gain).connect(master)
    osc.start(when)
    osc.stop(when + duration + 0.05)
  })
}

// A short breath of filtered noise: the sound of a wick catching.
function breath(when) {
  const length = Math.floor(audio.sampleRate * 0.32)
  const buffer = audio.createBuffer(1, length, audio.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 2
  }

  const source = audio.createBufferSource()
  const filter = audio.createBiquadFilter()
  const gain = audio.createGain()
  source.buffer = buffer
  filter.type = 'bandpass'
  filter.frequency.value = 1100
  filter.Q.value = 0.8
  gain.gain.value = 0.16
  source.connect(filter).connect(gain).connect(master)
  source.start(when)
}

export function playDiya(index, delay = 0) {
  if (muted) return
  const ctx = context()
  if (!ctx) return
  const now = ctx.currentTime + 0.01 + delay
  breath(now)
  bell(NOTES[index % NOTES.length], now + 0.03, 1.9, 0.5)
}

export function playDim() {
  if (muted) return
  const ctx = context()
  if (!ctx) return
  breath(ctx.currentTime + 0.01)
}

export function playBlessing() {
  if (muted) return
  const ctx = context()
  if (!ctx) return
  const now = ctx.currentTime + 0.06
  bell(261.63, now, 3.4, 0.34)
  bell(392, now + 0.14, 3.2, 0.26)
  bell(523.25, now + 0.28, 3, 0.22)
  bell(659.25, now + 0.42, 2.8, 0.18)
}

export function playPreview() {
  if (muted) return
  const ctx = context()
  if (!ctx) return
  bell(659.25, ctx.currentTime + 0.01, 1.4, 0.4)
}