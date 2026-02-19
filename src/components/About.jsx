import { useRef, useState, useEffect } from 'react'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8 ${visible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="about-heading" className="mb-8 text-3xl font-bold text-text-primary">
          About
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {profile.avatar && (
            <div className="shrink-0">
              <img
                src={profile.avatar}
                alt="Profile avatar"
                width={160}
                height={160}
                className="rounded-2xl border-2 border-accent/30 object-cover shadow-lg"
              />
            </div>
          )}
          <div className="space-y-4 text-text-secondary">
            <p className="leading-relaxed">{profile.bio}</p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-text-primary">Background</h3>
              <p className="text-text-muted">{profile.education}</p>
              <p className="text-text-muted">{profile.experience}</p>
              <p className="text-text-muted">{profile.interests}</p>
            </div>
            <p className="border-l-4 border-accent pl-4 italic text-text-muted">{profile.statement}</p>
            <a
              href="#skills"
              className="inline-flex min-h-[44px] items-center text-accent underline decoration-accent underline-offset-4 transition hover:text-accent-light focus:rounded focus:outline-none focus:ring-2 focus:ring-accent"
            >
              View my skills →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
