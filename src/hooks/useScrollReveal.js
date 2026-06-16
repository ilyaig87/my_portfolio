import { useEffect } from 'react'

/**
 * Adds an `is-visible` class to every element with the `reveal` class
 * as it scrolls into the viewport. Lightweight, dependency-free, and
 * automatically picks up elements that mount after the first render.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const observed = new Set()
    const attach = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          observer.observe(el)
        }
      })
    }

    attach()
    // Catch any elements added asynchronously.
    const mutation = new MutationObserver(attach)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}

export default useScrollReveal
