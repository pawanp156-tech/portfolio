import { useRef, useState } from 'react'

/**
 * Tabbed tech stack following the ARIA tabs pattern: one tab in the tab order
 * at a time, arrow keys move between them, and each panel is labelled by its
 * tab. Without the roving tabindex a keyboard user has to tab through every
 * category before reaching the content.
 */
export default function TechStack({ intro, categories }) {
  const [activeId, setActiveId] = useState(categories[0].id)
  const tabRefs = useRef([])

  const activeIndex = categories.findIndex((category) => category.id === activeId)
  const active = categories[activeIndex]

  const focusTab = (index) => {
    setActiveId(categories[index].id)
    tabRefs.current[index]?.focus()
  }

  const handleKeyDown = (event) => {
    const last = categories.length - 1
    const moves = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }

    const next = moves[event.key]
    if (next === undefined) return

    event.preventDefault()
    focusTab(next)
  }

  return (
    <section id="tech" className="tech-section" aria-labelledby="tech-title">
      <div className="section-intro" data-reveal>
        <p className="eyebrow eyebrow-rule">{intro.eyebrow}</p>
        <h2 id="tech-title">{intro.title}</h2>
        {intro.description ? <p className="section-description">{intro.description}</p> : null}
      </div>

      <div className="tech-panel-wrap" data-reveal>
        <div className="tech-tabs" role="tablist" aria-label="Technology categories">
          {categories.map((category, index) => (
            <button
              key={category.id}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              className={`tech-tab${category.id === activeId ? ' is-active' : ''}`}
              aria-selected={category.id === activeId}
              aria-controls={`panel-${category.id}`}
              tabIndex={category.id === activeId ? 0 : -1}
              onClick={() => setActiveId(category.id)}
              onKeyDown={handleKeyDown}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          // Keying on the category remounts the grid, which replays the
          // per-tile entrance animation on every tab switch.
          key={active.id}
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="tech-grid"
          tabIndex={0}
        >
          {active.items.map((item, index) => (
            <article className="tech-item" key={item.name} style={{ '--i': index }}>
              <span className="tech-name">{item.name}</span>
              <span className="tech-kind">{item.kind}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
