import { useEffect, useRef } from 'react'

const finePointer = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Global interactive layer: scroll progress bar, cursor glow,
 * magnetic buttons and 3D-tilt cards ([data-tilt]).
 * All effects are skipped on touch devices and for users who
 * prefer reduced motion.
 */
const Effects = () => {
  const progressRef = useRef(null)
  const glowRef = useRef(null)

  // Scroll progress bar
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return
    let ticking = false
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      bar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cursor glow (smoothed with rAF lerp)
  useEffect(() => {
    if (!finePointer()) return
    const glow = glowRef.current
    if (!glow) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    let tx = x
    let ty = y
    let raf
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      glow.style.opacity = 1
    }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  // Magnetic buttons + 3D tilt cards (event delegation)
  useEffect(() => {
    if (!finePointer()) return

    const MAGNET = 0.28
    const TILT_MAX = 7

    const onMove = (e) => {
      const btn = e.target.closest('.btn')
      if (btn) {
        const r = btn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        btn.style.transform = `translate(${dx * MAGNET}px, ${dy * MAGNET}px)`
      }

      const card = e.target.closest('[data-tilt]')
      if (card) {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        const rx = (0.5 - py) * TILT_MAX
        const ry = (px - 0.5) * TILT_MAX
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`
        card.style.setProperty('--glare-x', `${px * 100}%`)
        card.style.setProperty('--glare-y', `${py * 100}%`)
        card.classList.add('is-tilting')
      }
    }

    const onOut = (e) => {
      const btn = e.target.closest('.btn')
      if (btn && !btn.contains(e.relatedTarget)) {
        btn.style.transform = ''
      }
      const card = e.target.closest('[data-tilt]')
      if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = ''
        card.classList.remove('is-tilting')
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className='scroll-progress' ref={progressRef} aria-hidden='true' />
      <div className='cursor-glow' ref={glowRef} aria-hidden='true' />
    </>
  )
}

export default Effects
