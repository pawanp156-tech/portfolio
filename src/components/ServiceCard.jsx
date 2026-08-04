import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ icon, title, description }) {
  return (
    <article className="service-card">
      <ServiceIcon name={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
