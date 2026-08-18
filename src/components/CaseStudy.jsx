import { useEffect, useState } from 'react'

const ROTATE_MS = 3000

// Same single-quote card as before, except it now cycles through several
// testimonials on a timer instead of showing one fixed placeholder. Hover or
// focus pauses the timer so a reader isn't fighting the copy while it changes.
export default function CaseStudy({ items }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!items || items.length < 2 || isPaused) return undefined

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, ROTATE_MS)

    return () => window.clearInterval(id)
  }, [items, isPaused])

  if (!items || items.length === 0) return null

  const current = items[index]

  return (
    <figure
      className="case-study"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <span className="case-mark" aria-hidden="true">
        &rdquo;
      </span>

      <blockquote className="case-quote" key={`quote-${index}`}>
        {current.quote}
      </blockquote>

      <figcaption className="case-meta" key={`meta-${index}`}>
        <img
          className="case-avatar"
          src={current.image}
          alt=""
          width="72"
          height="72"
          loading="lazy"
        />
        <span className="case-client">{current.name}</span>
      </figcaption>

      {items.length > 1 ? (
        <div className="case-dots" role="tablist" aria-label="Client testimonials">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${item.name}`}
              className={`case-dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </figure>
  )
}
