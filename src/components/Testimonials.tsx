import { testimonials } from '../data/site'
import { IconStar } from './icons'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
<div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-sage-600">Client stories</p>
          <h2 id="testimonials-heading" className="mt-2 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
            Trusted by homeowners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Real feedback from clients who chose AS Residential for builds, renovations, and additions.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl border border-stone-200 bg-cream p-8 shadow-soft"
            >
              <div className="flex gap-1 text-terracotta-500" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <blockquote className="mt-5 flex-1">
                <p className="text-lg leading-relaxed text-stone-700">&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <footer className="mt-6 border-t border-stone-200 pt-5">
                <cite className="not-italic">
                  <p className="font-bold text-stone-900">{item.name}</p>
                  <p className="text-sm text-stone-500">{item.project}</p>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
