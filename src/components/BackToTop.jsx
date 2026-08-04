import { useEffect, useState } from 'react'

const SHOW_AFTER_PX = 600

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      // Keeps it out of the tab order and off the a11y tree while hidden.
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={isVisible ? undefined : 'true'}
    >
      <span aria-hidden="true">↑</span>
    </button>
  )
}
