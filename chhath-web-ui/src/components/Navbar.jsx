import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, Volume2, VolumeX, X } from 'lucide-react'
import { DiyoMark } from './Scenes'
import { navLinks } from '../data/site'
import { isMuted, playPreview, setMuted } from '../lib/sound'

const CHAPTERS = [
  ['top', 'sun'],
  ['story', 'sun'],
  ['chhath', 'sun'],
  ['between', 'dusk'],
  ['tihar', 'lamp'],
  ['light', 'lamp'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [chapter, setChapter] = useState('sun')
  const [muted, setMutedState] = useState(isMuted)
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const sections = CHAPTERS.map(([id, tone]) => {
      const element = document.getElementById(id)
      return element ? { id, tone, element } : null
    }).filter(Boolean)

    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const y = window.scrollY
        const ratio = scrollable > 0 ? y / scrollable : 0
        setScrolled(y > 24)
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`
        }

        if (!sections.length) return

        // An observer band can sit past the last section on a short closing
        // screen, so resolve the chapter from position instead: the last
        // section above the reading line owns it, and the final one wins at
        // the foot of the page.
        const line = y + window.innerHeight * 0.42
        const atBottom = scrollable > 0 && scrollable - y < 2
        let current = sections[0]
        if (atBottom) {
          current = sections[sections.length - 1]
        } else {
          sections.forEach((section) => {
            if (section.element.getBoundingClientRect().top + y <= line) current = section
          })
        }
        setActive(current.id)
        setChapter(current.tone)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    menuRef.current?.querySelector('a')?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const toggleSound = () => {
    const next = !muted
    setMuted(next)
    setMutedState(next)
    if (!next) playPreview()
  }

  return (
    <header
      className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
      data-chapter={chapter}
      ref={headerRef}
    >
      <div className="shell header-inner">
        <a
          aria-label="Chhath and Tihar — back to top"
          className="brand"
          href="#top"
          onClick={closeMenu}
        >
          <DiyoMark className="brand-mark" size={30} />
          <span aria-hidden="true" className="brand-word">
            Chhath <span className="amp">&amp;</span> Tihar
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              aria-current={active === link.id ? 'location' : undefined}
              className="nav-link"
              href={`#${link.id}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <button
            aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
            aria-pressed={!muted}
            className={`sound-toggle ${muted ? 'is-muted' : ''}`}
            onClick={toggleSound}
            title={muted ? 'Sound off — a bell chimes when you light a diya' : 'Sound on'}
            type="button"
          >
            {muted ? (
              <VolumeX aria-hidden="true" size={17} strokeWidth={1.8} />
            ) : (
              <Volume2 aria-hidden="true" size={17} strokeWidth={1.8} />
            )}
            <span className="sound-toggle-text">{muted ? 'Sound off' : 'Sound on'}</span>
          </button>

          <a className="btn btn-primary btn-nav hidden sm:inline-flex" href="#light">
            <DiyoMark size={17} />
            Light a diyo
          </a>

          <button
            aria-controls="site-menu"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="menu-button lg:hidden"
            onClick={() => setOpen((value) => !value)}
            ref={menuButtonRef}
            type="button"
          >
            {open ? (
              <X aria-hidden="true" size={20} strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="read-progress">
        <span ref={progressRef} />
      </div>

      {open && (
        <div className="mobile-menu lg:hidden" id="site-menu" ref={menuRef}>
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.id}
                aria-current={active === link.id ? 'location' : undefined}
                className="mobile-link"
                href={`#${link.id}`}
                onClick={closeMenu}
              >
                {link.label}
                <ArrowRight aria-hidden="true" size={16} strokeWidth={1.6} />
              </a>
            ))}
          </nav>
          <a className="btn btn-primary mt-5 w-full" href="#light" onClick={closeMenu}>
            <DiyoMark size={18} />
            Light a diyo
          </a>
        </div>
      )}
    </header>
  )
}