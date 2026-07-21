import { useEffect } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Decodes every `section > h2` (pure-text ones) with a scramble/settle
 * effect the first time it scrolls into view. Skips headings that contain
 * child elements (e.g. gradient spans) and honours reduced-motion.
 */
const useScrambleHeadings = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const headings = Array.from(
      document.querySelectorAll('section > h2')
    ).filter((h) => h.children.length === 0 && h.textContent.trim())

    const scramble = (el) => {
      const final = el.textContent
      let frame = 0
      const from = final
        .split('')
        .map((ch) => ({ ch, start: Math.floor(Math.random() * 14) }))

      const tick = () => {
        let out = ''
        let settled = 0
        from.forEach(({ ch, start }, i) => {
          if (ch === ' ') {
            out += ' '
            settled++
          } else if (frame >= start + 10) {
            out += final[i]
            settled++
          } else if (frame >= start) {
            out += CHARS[Math.floor(Math.random() * CHARS.length)]
          } else {
            out += final[i]
          }
        })
        el.textContent = out
        frame++
        if (settled < from.length) requestAnimationFrame(tick)
        else el.textContent = final
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scramble(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6 }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])
}

export default useScrambleHeadings
