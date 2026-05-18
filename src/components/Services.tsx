import { services } from '../data/site'
import { IconExpand, IconHammer, IconHome } from './icons'

const iconMap = {
  home: IconHome,
  hammer: IconHammer,
  expand: IconExpand,
} as const

export function Services() {
  return (
    <section id="services" className="section-pad bg-white" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sage-600">What we do</p>
          <h2 id="services-heading" className="mt-2 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
            Residential construction, start to finish
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Whether you are breaking ground or refreshing a single room, our team brings the same
            standards: clear communication, quality materials, and work that stands up to daily life.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <li
                key={service.title}
                className="group rounded-2xl border border-stone-200 bg-cream p-8 shadow-soft transition md:hover:-translate-y-1 md:hover:shadow-card"
              >
                <div className="inline-flex rounded-xl bg-sage-600/10 p-3 text-sage-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-stone-900">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{service.description}</p>
                <a
                  href="#quote"
                  className="mt-6 inline-flex text-sm font-bold text-terracotta-600 transition group-hover:text-terracotta-700"
                >
                  Get a quote for this service →
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
