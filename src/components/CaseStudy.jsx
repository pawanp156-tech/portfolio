import SplitWords from './SplitWords'

export default function CaseStudy({ quote, client, services, image, imageAlt }) {
  return (
    <figure className="case-study">
      <span className="case-mark" aria-hidden="true">
        &rdquo;
      </span>

      <blockquote className="case-quote" data-reveal-words>
        <SplitWords text={quote} />
      </blockquote>

      <figcaption className="case-meta" data-reveal>
        <img
          className="case-avatar"
          src={image}
          alt={imageAlt}
          width="144"
          height="144"
          loading="lazy"
        />
        <span className="case-client">{client}</span>
        <span className="case-services">{services}</span>
      </figcaption>
    </figure>
  )
}
