import { useRef, useState, useEffect } from 'react'
import { achievements } from '../data/academic'

const AchievementIcon = ({ icon }) => {
  const icons = {
    trophy: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    certificate: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    university: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    star: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  }
  return icons[icon] || null
}

export default function Academic() {
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
      id="academic"
      ref={ref}
      className={`scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="academic-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="academic-heading" className="mb-12 text-center text-3xl font-bold text-text-primary">
          Academic Achievements
        </h2>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent via-accent-light to-accent md:block" />
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`flex items-center gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${visible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: visible ? `${index * 150}ms` : '0ms' }}
              >
                <div className="hidden flex-1 md:block" />
                <div className="relative z-10 flex-1">
                  <div className="relative rounded-xl border border-accent/30 bg-background-surface/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/60 hover:shadow-lg">
                    <div className="absolute -left-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-accent bg-background-alt md:block" />
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                        <AchievementIcon icon={achievement.icon} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">{achievement.title}</h3>
                        <p className="text-sm text-text-muted">{achievement.year}</p>
                      </div>
                    </div>
                    <p className="text-accent">{achievement.result}</p>
                  </div>
                </div>
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
