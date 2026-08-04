import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

const INTERVAL_MS = 3000

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Auto-advancing project carousel, one slide at a time, looping.
 *
 * There is no visible pause control by request. Rotation still stops on hover
 * and on keyboard focus, and never starts at all for visitors who ask for
 * reduced motion, so there is always some way to hold a slide still.
 */
export default function WorkSlider({ projects }) {
  const count = projects.length
  const [index, setIndex] = useState(0)
  const [autoPlay] = useState(() => !prefersReducedMotion())
  const [isPaused, setIsPaused] = useState(false)

  const goTo = (next) => setIndex(((next % count) + count) % count)

  useEffect(() => {
    if (!autoPlay || isPaused || count < 2) return undefined

    // `index` is a dependency on purpose: using a control restarts the full
    // interval rather than jumping again a moment later.
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), INTERVAL_MS)

    return () => window.clearTimeout(timer)
  }, [index, autoPlay, isPaused, count])

  if (count === 0) return null

  return (
    <div
      className="work-slider"
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="work-viewport">
        <div className="work-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {projects.map((project, slideIndex) => {
            const isActive = slideIndex === index

            return (
              <div
                className="work-slide"
                key={project.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} of ${count}`}
                // `inert` keeps links inside off-screen slides out of the tab
                // order and off the accessibility tree.
                inert={!isActive || undefined}
              >
                <ProjectCard {...project} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="work-controls">
        <button
          type="button"
          className="work-btn"
          onClick={() => goTo(index - 1)}
          aria-label="Previous project"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="work-dots" role="tablist" aria-label="Choose project">
          {projects.map((project, dotIndex) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              className={`work-dot${dotIndex === index ? ' is-active' : ''}`}
              aria-selected={dotIndex === index}
              aria-label={project.title}
              onClick={() => goTo(dotIndex)}
            />
          ))}
        </div>

        <button
          type="button"
          className="work-btn"
          onClick={() => goTo(index + 1)}
          aria-label="Next project"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
