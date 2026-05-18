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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="group flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-tight text-stone-900 sm:text-xl">
            AS Residential
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-600">
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
          className="inline-flex items-center justify-center rounded-lg p-2 text-stone-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[4.25rem] z-40 bg-cream transition-opacity md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        hidden={!open}
      >
        <ul className="flex flex-col gap-1 px-4 py-6">
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
          <li className="mt-4 border-t border-stone-200 pt-4">
            <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-2 font-semibold text-stone-800">
              <IconPhone />
              {PHONE}
            </a>
            <a href={EMAIL_HREF} className="block px-4 py-2 text-stone-600">
              hello@asresidential.com
            </a>
          </li>
          <li className="px-4 pt-4">
            <a
              href="#quote"
              className="block rounded-full bg-terracotta-600 py-3 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
