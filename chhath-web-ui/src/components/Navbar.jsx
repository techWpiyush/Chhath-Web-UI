import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { DiyoMark } from './Scenes'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuButtonRef = useRef(null)

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 24))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="Chhath and Tihar — back to top" onClick={closeMenu}>
          <DiyoMark className="brand-mark" size={30} />
          <span className="brand-word" aria-hidden="true">
            Chhath <span className="amp">&amp;</span> Tihar
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
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

        <div className="hidden items-center md:flex">
          <a className="btn btn-primary btn-nav" href="#light">
            <DiyoMark size={17} />
            Light a diyo
          </a>
        </div>

        <button
          aria-controls="site-menu"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="menu-button md:hidden"
          onClick={() => setOpen((value) => !value)}
          ref={menuButtonRef}
          type="button"
        >
          {open ? <X aria-hidden="true" size={20} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu md:hidden" id="site-menu">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <a key={link.id} className="mobile-link" href={`#${link.id}`} onClick={closeMenu}>
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
