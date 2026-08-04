import { useEffect, useState } from 'react'

const MIN_VISIBLE_MS = 700
const EXIT_MS = 700

/**
 * Drives the intro loader from the real `window.load` event (fonts, images,
 * scripts) rather than an arbitrary timer, with a minimum on-screen time so a
 * warm cache does not produce a single-frame flash.
 *
 * Returns 'loading' -> 'exiting' -> 'done'.
 */
export function usePageLoader() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const startedAt = performance.now()
    let exitTimer
    let doneTimer

    const finish = () => {
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt))

      exitTimer = window.setTimeout(() => {
        setStatus('exiting')
        doneTimer = window.setTimeout(() => setStatus('done'), EXIT_MS)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', status !== 'done')
    return () => document.body.classList.remove('is-loading')
  }, [status])

  return status
}
