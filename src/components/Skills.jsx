import { useRef, useState, useEffect } from 'react'
import { skills, levelToPercent } from '../data/skills'
import SkillIcon from './SkillIcon'

export default function Skills() {
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

  // Flatten all skills into one array for card grid
  const allSkills = skills.flatMap((group) => group.items)

  return (
    <section
      id="skills"
      ref={ref}
      className={`scroll-mt-16 bg-background-alt px-4 py-16 sm:px-6 lg:px-8 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="skills-heading" className="mb-10 text-center text-3xl font-bold text-text-primary">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allSkills.map((item, index) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-background-surface p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] ${
                visible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: visible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="mb-4 flex items-center justify-center">
                <SkillIcon icon={item.icon} />
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold text-text-primary">{item.name}</h3>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-text-muted">{item.level}</span>
                <span className="font-medium text-accent">{levelToPercent[item.level] ?? 50}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-background-alt">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-700"
                  style={{ width: visible ? `${levelToPercent[item.level] ?? 50}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
