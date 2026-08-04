export default function ProjectCard({ title, description, image, imageAlt, href }) {
  // The whole card is the click target when there is somewhere to go, and a
  // plain article when there is not — rather than a link to nowhere.
  const Element = href ? 'a' : 'article'
  const isExternal = Boolean(href) && /^https?:/i.test(href)

  return (
    <Element
      className={`project-card${href ? ' is-linked' : ''}`}
      {...(href ? { href } : {})}
      // noreferrer also implies noopener, which stops the opened tab getting a
      // handle on this one.
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <div className="project-media">
        <img src={image} alt={imageAlt} width="900" height="600" loading="lazy" />
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {href ? (
          <span className="project-link">
            Visit site
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </span>
        ) : null}
      </div>
    </Element>
  )
}
