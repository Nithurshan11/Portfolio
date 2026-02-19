import { useState } from 'react'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Invalid email'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          setStatus('success')
          setForm({ name: '', email: '', message: '' })
        } else setStatus('error')
      } catch {
        setStatus('error')
      }
    } else {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }
  }

  const social = profile.social

  return (
    <section
      id="contact"
      className="scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2 id="contact-heading" className="mb-4 text-3xl font-bold text-text-primary">
          Contact
        </h2>
        <p className="mb-8 text-text-muted">Let&apos;s work together. Get in touch.</p>

        <div className="mb-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${social.email}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 text-accent transition hover:bg-accent/10 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <span aria-hidden="true">✉</span> Email
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 text-accent transition hover:bg-accent/10 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            LinkedIn
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 text-accent transition hover:bg-accent/10 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            GitHub
          </a>
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 text-accent transition hover:bg-accent/10 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Twitter
            </a>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-text-primary">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-white/20 bg-background-surface px-4 py-3 text-text-primary transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:bg-gradient-to-r focus:from-accent/5 focus:via-transparent focus:to-transparent focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-text-primary">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-lg border border-white/20 bg-background-surface px-4 py-3 text-text-primary transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:bg-gradient-to-r focus:from-accent/5 focus:via-transparent focus:to-transparent focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-text-primary">
              Message
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-background-surface px-4 py-3 text-text-primary transition-all duration-300 placeholder:text-text-muted focus:border-accent focus:bg-gradient-to-r focus:from-accent/5 focus:via-transparent focus:to-transparent focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your message"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          {status === 'success' && (
            <p className="text-sm text-green-400" role="status">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400" role="alert">
              Something went wrong. Please try emailing directly.
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-accent via-accent-light to-purple-600 px-6 py-3 font-medium text-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === 'loading' ? 'Sending…' : "Send message"}
          </button>
        </form>

        {/* Contact Information Cards */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-xl font-semibold text-text-primary">Contact Information</h3>
          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <a
              href={`mailto:${social.email}`}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-background-surface p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-lg focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-alt">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text-primary">Email</p>
                <p className="text-text-secondary">{social.email}</p>
              </div>
            </a>

            {/* Phone Card */}
            {social.phone && (
              <a
                href={`tel:${social.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-background-surface p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-lg focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-alt">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-text-primary">Phone</p>
                  <p className="text-text-secondary">{social.phone}</p>
                </div>
              </a>
            )}

            {/* Location Card */}
            {social.location && (
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-background-surface p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background-alt">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-text-primary">Location</p>
                  <p className="text-text-secondary">{social.location}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
