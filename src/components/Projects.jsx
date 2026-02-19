import { useRef, useState, useEffect } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
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
      id="projects"
      ref={ref}
      className={`scroll-mt-16 bg-background-alt px-4 py-16 sm:px-6 lg:px-8 ${visible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="projects-heading" className="mb-10 text-3xl font-bold text-text-primary">
          Projects
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <article
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-background-surface p-6 shadow-lg transition duration-300 hover:scale-[1.02] hover:border-accent/50 hover:shadow-accent/10 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background"
              >
                {project.image && (
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-background">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                )}
                {project.category && (
                  <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                )}
                <h3 className="mb-2 text-xl font-semibold text-text-primary">{project.name}</h3>
                <p className="mb-4 text-text-muted">{project.description}</p>
                <ul className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center text-accent underline decoration-accent underline-offset-4 hover:text-accent-light focus:rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-accent underline decoration-accent underline-offset-4 hover:text-accent-light focus:rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
