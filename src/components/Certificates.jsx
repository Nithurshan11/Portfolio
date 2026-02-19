import { useRef, useState, useEffect } from 'react'
import { certificates } from '../data/certificates'

export default function Certificates() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="certificates"
      ref={ref}
      className={`scroll-mt-16 bg-background-alt px-4 py-16 sm:px-6 lg:px-8 ${visible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="certificates-heading" className="mb-10 text-3xl font-bold text-text-primary">
          Certificates & Achievements
        </h2>
        <ul className="space-y-4">
          {certificates.map((cert) => (
            <li
              key={`${cert.name}-${cert.issuer}-${cert.year}`}
              className="flex flex-col gap-1 rounded-xl border border-white/10 bg-background-surface p-4 transition hover:border-accent/30 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent" aria-hidden="true">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-text-primary">{cert.name}</p>
                  <p className="text-sm text-text-muted">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  download
                  className="mt-2 inline-flex min-h-[44px] shrink-0 items-center text-accent underline decoration-accent underline-offset-4 hover:text-accent-light focus:rounded focus:outline-none focus:ring-2 focus:ring-accent sm:mt-0"
                >
                  Download PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
