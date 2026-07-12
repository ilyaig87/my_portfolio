import { useEffect, useState } from 'react'

const TYPE_MS = 75
const DELETE_MS = 38
const HOLD_MS = 1800

/** Cycles through phrases with a typewriter effect and blinking caret. */
const Typewriter = ({ phrases }) => {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(phrases[0].length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const phrase = phrases[index]
    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && length === phrase.length) delay = HOLD_MS

    const timer = setTimeout(() => {
      if (!deleting) {
        if (length === phrase.length) setDeleting(true)
        else setLength(length + 1)
      } else if (length > 0) {
        setLength(length - 1)
      } else {
        setDeleting(false)
        setIndex((index + 1) % phrases.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [phrases, index, length, deleting])

  return (
    <span className='typewriter'>
      {phrases[index].slice(0, length)}
      <span className='caret' aria-hidden='true' />
    </span>
  )
}

export default Typewriter
