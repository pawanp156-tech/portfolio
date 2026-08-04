import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wires up every scroll-driven effect on the page.
 *
 * Nothing here is declared in CSS: the "hidden" starting state is applied by
 * GSAP itself, so if this never runs — reduced motion, a script error, no JS —
 * the page simply renders fully visible instead of blank.
 *
 * Markup opts in through data attributes:
 *   data-reveal          → fades and rises once as it enters the viewport
 *   data-reveal-group    → staggers its direct children the same way
 *   data-reveal-words    → staggers the .word-inner spans from <SplitWords />
 *
 * Pass `enabled` as false until the loader is gone, otherwise ScrollTrigger
 * measures the page while the body is still scroll-locked.
 */
export function useScrollAnimations(enabled) {
  useEffect(() => {
    if (!enabled) return undefined

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const reveal = { opacity: 0, y: 36, duration: 0.8, ease: 'power3.out' }

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          ...reveal,
          scrollTrigger: { trigger: element, start: 'top 85%', once: true },
        })
      })

      gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
        gsap.from(group.children, {
          ...reveal,
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })

      // For multi-row grids, each card gets its OWN trigger instead of the grid
      // sharing one. Cards in the same row share a top edge, so they fire at the
      // same scroll position and land together — a single staggered tween across
      // the whole grid leaves a row visibly stepped while it plays.
      gsap.utils.toArray('[data-reveal-each]').forEach((group) => {
        gsap.utils.toArray(group.children).forEach((child) => {
          gsap.from(child, {
            ...reveal,
            scrollTrigger: { trigger: child, start: 'top 88%', once: true },
          })
        })
      })

      gsap.utils.toArray('[data-reveal-words]').forEach((heading) => {
        gsap.from(heading.querySelectorAll('.word-inner'), {
          yPercent: 110,
          duration: 0.85,
          ease: 'power4.out',
          stagger: 0.045,
          scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
        })
      })

      // Stat numbers count up from zero. The markup already holds the final
      // value, so this only ever animates towards what is already rendered.
      gsap.utils.toArray('[data-count]').forEach((element) => {
        const target = Number(element.dataset.count)
        if (!Number.isFinite(target)) return

        const counter = { value: 0 }

        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = String(Math.round(counter.value))
          },
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      // The background wash drifts slower than the page for a shallow parallax.
      const glow = document.querySelector('.hero-glow')
      if (glow) {
        gsap.to(glow, {
          yPercent: -14,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-card',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      }

      // Media eases out of a slight scale as its section passes through.
      gsap.utils.toArray('.about-media img').forEach((image) => {
        gsap.from(image, {
          scale: 1.08,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: image, start: 'top 88%', once: true },
        })
      })

      // Top progress bar tracks how far down the document we are.
      const progress = document.querySelector('.scroll-progress span')
      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
          }
        )
      }

      // Late-arriving webfonts and images change element positions.
      ScrollTrigger.refresh()
    })

    return () => mm.revert()
  }, [enabled])
}
