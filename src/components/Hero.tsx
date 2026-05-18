import { PHONE, PHONE_HREF } from '../data/site'
import { IconPhone } from './icons'

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6162a9a0c0?w=1920&q=80&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/75 via-stone-900/55 to-stone-900/80" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 pb-20 pt-12 sm:px-6 sm:pb-28 lg:px-8 lg:pt-16">
        <p className="mb-4 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
          Licensed & insured · 15+ years local
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Homes built with care. Renovations done right.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-100 sm:text-xl">
          AS Residential partners with homeowners on custom builds, renovations, and additions —
          transparent pricing, skilled crews, and craftsmanship you can see in every detail.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-terracotta-600 px-8 py-4 text-center text-base font-bold text-white shadow-card transition hover:bg-terracotta-700"
          >
            Request a Free Quote
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <IconPhone className="w-5 h-5" />
            Call {PHONE}
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 border-t border-white/20 pt-10 sm:grid-cols-3" aria-label="Company highlights">
          {[
            { stat: '200+', label: 'Projects completed' },
            { stat: '4.9★', label: 'Average client rating' },
            { stat: '100%', label: 'On-site project management' },
          ].map((item) => (
            <li key={item.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold text-white">{item.stat}</p>
              <p className="mt-1 text-sm font-medium text-stone-200">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
