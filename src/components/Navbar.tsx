import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data/site'
import { IconClose, IconMenu, IconPhone } from './icons'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Projects' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#quote', label: 'Get a Quote' },
]

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) return null

  return createPortal(

<div
      id="mobile-menu"
      className="fixed inset-0 z-[100] flex flex-col bg-cream md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between border-b border-stone-200 px-4 py-4">
        <span className="font-display text-lg font-bold text-stone-900">Menu</span>
        <button
          type="button"
          className="rounded-lg p-2 text-stone-800 hover:bg-sand"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <IconClose />
        </button>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-6" aria-label="Mobile">
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-4 py-3 text-lg font-semibold text-stone-800 hover:bg-sand"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-stone-200 bg-cream px-4 py-6">
        <a
          href={PHONE_HREF}
          className="flex items-center gap-3 px-2 py-2 font-semibold text-stone-800"
          onClick={onClose}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-600/10 text-sage-700">
            <IconPhone className="h-5 w-5" />
          </span>
          {PHONE}
        </a>
        <a
          href={EMAIL_HREF}
          className="block px-2 py-2 text-stone-600"
          onClick={onClose}
        >
          {EMAIL}
        </a>
        <a
          href="#quote"
          className="mt-4 block rounded-full bg-terracotta-600 py-3 text-center font-bold text-white shadow-soft"
          onClick={onClose}
        >
          Request a Free Quote
        </a>
      </div>
    </div>,
    document.body,
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const onHero = !scrolled && !open
  const barSolid = scrolled || open

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (open) {
      root.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      root.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      root.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-shadow ${
          barSolid ? 'bg-cream shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a href="#" className="flex flex-col leading-tight" onClick={closeMenu}>
            <span
              className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
                onHero ? 'text-white' : 'text-stone-900'
              }`}
            >
              AS Residential
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${
                onHero ? 'text-stone-200' : 'text-sage-600'
              }`}
            >
              Built to last
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-stone-700 transition-colors hover:text-terracotta-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 hover:text-terracotta-600"
            >
              <IconPhone />
              {PHONE}
            </a>
            <a
              href="#quote"
              className="rounded-full bg-terracotta-600 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-terracotta-700"
            >
              Free Quote
            </a>
          </div>

          <button
            type="button"
            className={`relative z-[120] inline-flex items-center justify-center rounded-lg p-2 md:hidden ${
              onHero && !open ? 'text-white' : 'text-stone-800'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </nav>
      </header>

      <MobileMenu open={open} onClose={closeMenu} />
    </>
  )
}
