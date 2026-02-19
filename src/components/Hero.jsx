import { useState, useEffect } from 'react'
import { profile } from '../data/profile'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [titleText, setTitleText] = useState('')
  const greeting = profile.greeting
  const fullText = greeting
  const titleFullText = profile.title
  const typingSpeed = 80

  const [done, setDone] = useState(false)
  const [titleDone, setTitleDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        setDone(true)
        clearInterval(timer)
        // Start typing title after greeting completes
        setTimeout(() => {
          let j = 0
          const titleTimer = setInterval(() => {
            if (j <= titleFullText.length) {
              setTitleText(titleFullText.slice(0, j))
              j++
            } else {
              setTitleDone(true)
              clearInterval(titleTimer)
            }
          }, typingSpeed)
        }, 300)
      }
    }, typingSpeed)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 from-0% via-transparent via-50% to-transparent to-100%" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {profile.avatar && (
          <div
            className="mb-6 flex justify-center"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="absolute -inset-1 animate-avatar-glow rounded-full bg-accent/30 blur-xl" />
              <img
                src={profile.avatar}
                alt="Portrait"
                width={160}
                height={160}
                className="relative h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-accent/40 ring-offset-4 ring-offset-background animate-avatar-in animate-float sm:h-40 sm:w-40"
              />
            </div>
          </div>
        )}
        <h1 id="hero-heading" className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
          <span className="inline-block min-w-[2ch] text-accent" aria-label={greeting}>
            {displayText}
            {!done && <span className="animate-pulse">|</span>}
          </span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-light to-text-primary bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mb-2 text-xl text-accent sm:text-2xl min-h-[1.5em]">
          {titleText}
          {!titleDone && <span className="animate-pulse">|</span>}
        </p>
        <p className="mb-8 text-text-muted">{profile.tagline}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={profile.ctaPrimaryHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-accent-dark hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            {profile.ctaPrimary}
          </a>
          <a
            href={profile.ctaSecondaryHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-accent px-6 py-3 font-medium text-accent transition-all duration-500 ease-in-out hover:scale-105 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            {profile.ctaSecondary}
          </a>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accent-light to-purple-600 px-6 py-3 font-medium text-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
