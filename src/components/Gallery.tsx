import { projects } from '../data/site'

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-sand" aria-labelledby="gallery-heading">
<div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-sage-600">Our work</p>
            <h2 id="gallery-heading" className="mt-2 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
              Recent projects
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              A sample of custom builds, renovations, and additions delivered for homeowners in our
              community.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-stone-800 px-6 py-3 text-sm font-bold text-stone-800 transition hover:bg-stone-800 hover:text-white"
          >
            Start your project
          </a>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title} className="group overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sage-700">
                  {project.category}
                </span>
              </div>
<div className="p-5">
                <h3 className="font-display text-lg font-bold text-stone-900">{project.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
