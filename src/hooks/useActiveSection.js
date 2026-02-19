import { useState, useEffect } from 'react'

const sectionIds = ['hero', 'about', 'projects', 'skills', 'academic', 'certificates', 'contact']

export function useActiveSection() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(id)
          })
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
    return () => observers.forEach((cleanup) => cleanup?.())
  }, [])

  return activeId
}
