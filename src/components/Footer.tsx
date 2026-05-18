import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data/site'

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Projects' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#quote', label: 'Get a Quote' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-stone-900">AS Residential</p>
            <p className="mt-2 max-w-xs text-stone-600">
              Custom homes, renovations, and additions — built for families who value quality and
              trust.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-semibold text-stone-700 hover:text-terracotta-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-stone-600">
            <p className="font-semibold text-stone-900">Contact</p>
            <a href={PHONE_HREF} className="mt-2 block hover:text-terracotta-600">
              {PHONE}
            </a>
            <a href={EMAIL_HREF} className="block hover:text-terracotta-600">
              {EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
          © {year} AS Residential. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
