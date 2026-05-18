import { useState, type FormEvent } from 'react'
import { EMAIL, PHONE, PHONE_HREF, projectTypes } from '../data/site'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const data = new FormData(form)

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) throw new Error('Unable to send your request.')
        setStatus('success')
        form.reset()
        return
      } catch {
        setStatus('error')
        setErrorMessage('Something went wrong. Please call us directly.')
        return
      }
    }

    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const projectType = String(data.get('projectType') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(`Quote request — ${projectType || 'AS Residential'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${projectType}\n\n${message}`,
    )
    window.location.href = `mailto:hello@asresidential.com?subject=${subject}&body=${body}`
    setStatus('success')
    form.reset()
  }

  return (
    <section id="quote" className="section-pad bg-stone-900 text-white" aria-labelledby="quote-heading">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-terracotta-500">Get started</p>
          <h2 id="quote-heading" className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Request your free quote
          </h2>
          <p className="mt-4 text-lg text-stone-300">
            Tell us about your project. We respond within one business day with next steps and a
            consultation time.
          </p>

          <div className="mt-10 space-y-4 rounded-2xl border border-stone-700 bg-stone-800/50 p-6">
            <p className="font-semibold text-stone-100">Prefer to talk now?</p>
            <a
              href={PHONE_HREF}
              className="block text-2xl font-bold text-white hover:text-terracotta-400"
            >
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="block text-stone-300 hover:text-white">
              {EMAIL}
            </a>
          </div>

          <ul className="mt-8 space-y-3 text-stone-400">
            <li>✓ No-obligation consultation</li>
            <li>✓ Detailed scope & timeline estimate</li>
            <li>✓ Licensed, bonded & insured crews</li>
          </ul>
        </div>

        {status === 'success' ? (
          <div
            className="rounded-2xl border border-sage-500/40 bg-sage-700/20 p-8"
            role="status"
            aria-live="polite"
          >
            <h3 className="font-display text-2xl font-bold text-white">Thank you!</h3>
            <p className="mt-3 text-stone-200">
              {formspreeId
                ? 'Your quote request was sent. We will be in touch shortly.'
                : 'Your email app should open with your message. Send it to complete your request, or call us anytime.'}
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-900 hover:bg-stone-100"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>

<div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Full name <span className="text-terracotta-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/30"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                  Phone <span className="text-terracotta-400">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="w-full rounded-lg border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/30"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email <span className="text-terracotta-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/30"
                placeholder="you@email.com"
              />
            </div>
<div>
              <label htmlFor="projectType" className="mb-2 block text-sm font-semibold">
                Project type
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                className="w-full rounded-lg border border-stone-600 bg-stone-800 px-4 py-3 text-white focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/30"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-y rounded-lg border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-terracotta-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500/30"
                placeholder="Tell us about your timeline, location, and goals..."
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-300" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-terracotta-600 py-4 text-base font-bold text-white transition hover:bg-terracotta-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
            >
              {status === 'submitting' ? 'Sending…' : 'Submit quote request'}
            </button>

            <p className="text-xs text-stone-500">
              By submitting, you agree to be contacted about your project. We never share your
              information.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
