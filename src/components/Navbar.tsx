import { useEffect, useState } from 'react'
import { EMAIL_HREF, PHONE, PHONE_HREF } from '../data/site'
import { IconClose, IconMenu, IconPhone } from './icons'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Projects' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#quote', label: 'Get a Quote' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const onHero = !scrolled && !open
  const barSolid = scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 transition-colors sm:px-6 lg:px-8 ${
            barSolid ? 'bg-cream shadow-soft' : 'bg-transparent'
          }`}
          aria-label="Main navigation"
        >
          <a href="#" className="group flex flex-col leading-tight" onClick={() => setOpen(false)}>
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
            className={`inline-flex items-center justify-center rounded-lg p-2 md:hidden ${
              onHero ? 'text-white' : 'text-stone-800'
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

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] md:hidden ${open ? 'visible' : 'invisible pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-stone-900/40"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />

        <div
          className={`relative z-10 ml-auto flex h-full w-[min(100%,20rem)] flex-col bg-cream shadow-card transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-4 py-4">
            <span className="font-display text-lg font-bold text-stone-900">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 text-stone-800 hover:bg-sand"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IconClose />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-lg font-semibold text-stone-800 hover:bg-sand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-stone-200 px-4 py-6">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-2 py-2 font-semibold text-stone-800"
              onClick={() => setOpen(false)}
            >
              <IconPhone />
              {PHONE}
            </a>
            <a
              href={EMAIL_HREF}
              className="block px-2 py-2 text-stone-600"
              onClick={() => setOpen(false)}
            >
              hello@asresidential.com
            </a>
            <a
              href="#quote"
              className="mt-4 block rounded-full bg-terracotta-600 py-3 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
