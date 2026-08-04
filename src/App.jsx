import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './App.css'
import WorkSlider from './components/WorkSlider'
import SocialIcon from './components/SocialIcon'
import ServiceCard from './components/ServiceCard'
import CaseStudy from './components/CaseStudy'
import Loader from './components/Loader'
import SplitWords from './components/SplitWords'
import BackToTop from './components/BackToTop'
import TechStack from './components/TechStack'
import { usePageLoader } from './hooks/usePageLoader'
import { useActiveSection } from './hooks/useActiveSection'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import {
  about,
  caseStudy,
  contact,
  footerGroups,
  hero,
  navItems,
  projects,
  projectsIntro,
  services,
  servicesIntro,
  site,
  techCategories,
  techIntro,
} from './data/siteContent'

// Module scope keeps the array identity stable across renders.
const sectionIds = navItems.map((item) => item.href.slice(1))

function App() {
  const loaderStatus = usePageLoader()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const heroRef = useRef(null)

  // Held back until the loader unmounts so ScrollTrigger measures a scrollable page.
  useScrollAnimations(loaderStatus === 'done')

  // A boolean, not the raw status, so the hero entrance does not replay when
  // the loader moves from 'exiting' to 'done'.
  const heroReady = loaderStatus !== 'loading'

  useEffect(() => {
    // Wait for the loader to start lifting, otherwise the hero entrance plays
    // out of sight behind it and the visitor sees a static hero.
    if (!heroReady) return undefined

    // matchMedia keeps the entrance animation opt-in: visitors who ask for
    // reduced motion never get the opacity-0 starting state at all.
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.hero-copy > *',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, delay: 0.15, ease: 'power3.out' }
      )
    }, heroRef)

    return () => mm.revert()
  }, [heroReady])

  useEffect(() => {
    // Lock the page behind the drawer so scrolling does not run underneath it.
    document.body.classList.toggle('nav-open', isNavOpen)

    if (!isNavOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsNavOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isNavOpen])

  useEffect(() => () => document.body.classList.remove('nav-open'), [])

  const mailto = `mailto:${site.email}`

  return (
    <div className="theme-shell">
      {loaderStatus !== 'done' ? (
        <Loader label={site.name} isExiting={loaderStatus === 'exiting'} />
      ) : null}

      {/* Sits outside .container so the wash spans the full page width. */}
      <div className="hero-glow" aria-hidden="true" />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>

      <BackToTop />

      {/* Tap-outside-to-close for the mobile drawer. aria-hidden because Escape
          and the toggle already provide keyboard-reachable ways to close. */}
      <div
        className="nav-backdrop"
        data-open={isNavOpen}
        aria-hidden="true"
        onClick={() => setIsNavOpen(false)}
      />

      <header className="topbar">
        <div className="container topbar-inner">
          {/* The mark supplies the "P", the text supplies "awan". aria-label
              gives assistive tech the whole name — otherwise it reads "awan". */}
          <a className="brand" href="#top" aria-label={site.name}>
            <img className="brand-mark" src="/Logo.svg" alt="" width="32" height="34" />
            <span className="brand-text">awan</span>
          </a>

          <nav
            id="primary-navigation"
            className="nav-links"
            aria-label="Primary"
            data-open={isNavOpen}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? 'true' : undefined}
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            {/* Opens the visitor's mail client, same as the footer address,
                rather than scrolling to a section with no form in it. */}
            <a href={mailto} className="header-cta">
              {contact.ctaLabel}
              <span aria-hidden="true">↗</span>
            </a>

            {/* Sits after the CTA in the DOM so it also comes last visually on
                mobile — no `order` juggling needed. The label is on the button
                because the bars are decorative. */}
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={isNavOpen}
              aria-controls="primary-navigation"
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsNavOpen((open) => !open)}
            >
              <span className="nav-toggle-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="container portfolio-shell">
        <section id="top" className="hero-card" ref={heroRef} aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">{hero.kicker}</p>

            <h1 id="hero-title" className="hero-title">
              {hero.title}
              <span className="hero-dot" aria-hidden="true" />
            </h1>

            <p className="hero-description">{hero.description}</p>

            <div className="hero-actions">
              <a href={hero.primaryCta.href} className="btn btn-primary btn-lg">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="btn btn-secondary btn-lg">
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-layout">
            <div className="about-copy">
              <p className="eyebrow eyebrow-rule" data-reveal>
                {about.eyebrow}
              </p>
              <h2 id="about-title" className="about-title" data-reveal-words>
                <SplitWords text={about.title} />
              </h2>

              {about.paragraphs.map((paragraph) => (
                <p className="about-text" key={paragraph.slice(0, 40)} data-reveal>
                  {paragraph}
                </p>
              ))}

              <blockquote className="about-quote" data-reveal>
                {about.quote}
              </blockquote>

              <dl className="about-stats" data-reveal-group>
                {about.stats.map((stat) => (
                  <div className="about-stat" key={stat.label}>
                    <dt>
                      <span className="stat-value">
                        {/* The final number is in the markup, so it still reads
                            correctly without JS or with reduced motion. */}
                        <span className="stat-number" data-count={stat.value}>
                          {stat.value}
                        </span>
                        <span className="stat-suffix">{stat.suffix}</span>
                      </span>
                      <span className="stat-label">{stat.label}</span>
                    </dt>
                    <dd>{stat.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="about-media">
              <img src={about.image} alt={about.imageAlt} width="1200" height="800" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="services" className="services-section" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="eyebrow eyebrow-rule" data-reveal>
              {servicesIntro.eyebrow}
            </p>
            <h2 id="services-title" data-reveal-words>
              <SplitWords text={servicesIntro.title} />
            </h2>
          </div>

          <div className="services-grid" data-reveal-each>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <TechStack intro={techIntro} categories={techCategories} />

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="section-intro" data-reveal>
            <p className="eyebrow eyebrow-rule">{projectsIntro.eyebrow}</p>
            <h2 id="projects-title">{projectsIntro.title}</h2>
            <p className="section-description">{projectsIntro.description}</p>
          </div>

          <div data-reveal>
            <WorkSlider projects={projects} />
          </div>
        </section>

        {caseStudy ? (
          <section id="testimonials" className="case-section" aria-labelledby="case-title">
            <h2 id="case-title" className="visually-hidden">
              Client feedback
            </h2>
            <div data-reveal>
              <CaseStudy {...caseStudy} />
            </div>
          </section>
        ) : null}
      </main>

      <footer id="contact" className="site-footer" aria-labelledby="contact-title">
        <div className="container">
          <div className="footer-head">
            <h2 id="contact-title" className="footer-title" data-reveal-words>
              <SplitWords text={contact.title} />
            </h2>
          </div>

          <div className="footer-grid" data-reveal-group>
            <div className="footer-brand">
              <ul className="social-links">
                {site.socials.map((social) => {
                  const content = (
                    <>
                      <SocialIcon name={social.icon} />
                      <span className="visually-hidden">{social.label}</span>
                    </>
                  )

                  return (
                    <li key={social.icon}>
                      {social.href ? (
                        <a
                          className="social-link"
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {content}
                        </a>
                      ) : (
                        // No URL yet — render the mark, not a dead link.
                        <span className="social-link is-placeholder" title={social.label}>
                          {content}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>

              <p className="copyright">
                Copyright © {new Date().getFullYear()}, {site.name}. All rights reserved.
              </p>
            </div>

            <div className="footer-col">
              <h3>Get In Touch</h3>

              {site.locations.map((location) => (
                <div className="footer-location" key={location.city}>
                  <span className="location-city">{location.city}</span>
                  <span>{location.address}</span>
                </div>
              ))}

              <a className="footer-contact-link" href={mailto}>
                {site.email}
              </a>

              {site.phone ? (
                <a className="footer-contact-link" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              ) : null}
            </div>

            {footerGroups.map((group) => (
              <nav className="footer-col" key={group.title} aria-label={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
