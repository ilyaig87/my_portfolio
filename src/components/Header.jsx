import { useEffect, useRef } from 'react'
import '../assets/styles/header.css'
import MyCv from './MyCv'
import ME from '../assets/images/me.jpg'
import HeaderSocials from './HeaderSocials'
import Typewriter from './Typewriter'
import CountUp from './CountUp'

const ROLES = [
  'Full-Stack Developer',
  'AI-Accelerated Development',
  'React & Next.js',
  'Node.js & PHP/Yii2',
  'CRM & FinTech Platforms',
]

const Header = () => {
  const headerRef = useRef(null)

  // Subtle parallax: background blobs and photo drift with the cursor
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--par-x', x.toFixed(3))
      el.style.setProperty('--par-y', y.toFixed(3))
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <header id='top' ref={headerRef}>
      <div className='header-bg'>
        <span className='blob blob-1'></span>
        <span className='blob blob-2'></span>
        <span className='blob blob-3'></span>
      </div>

      <div className='container header-container'>
        <div className='header-text'>
          <span className='availability-badge'>
            <span className='pulse-dot'></span>
            Open to new opportunities
          </span>

          <h5>Hello, I'm</h5>
          <h1>
            Ilya Griss
            <span className='wave'>👋</span>
          </h1>
          <h2 className='header-role gradient-text'>
            <Typewriter phrases={ROLES} />
          </h2>
          <p className='header-tagline'>
            I build production-grade web platforms with React, PHP/Yii2 and
            Node.js — using AI tools daily to ship faster without compromising
            on quality.
          </p>

          <MyCv />
          <HeaderSocials />

          <ul className='header-stats'>
            <li>
              <CountUp end={3} suffix='+' />
              <span>Years experience</span>
            </li>
            <li>
              <CountUp end={25} prefix='~' suffix='%' />
              <span>Faster workflows</span>
            </li>
            <li>
              <CountUp end={30} prefix='~' suffix='%' />
              <span>Faster load times</span>
            </li>
          </ul>
        </div>

        <div className='header-visual'>
          <div className='me'>
            <div className='me-ring'></div>
            <div className='me-img'>
              <img src={ME} alt='Ilya Griss' />
            </div>
            <span className='floating-chip chip-react'>⚛️ React</span>
            <span className='floating-chip chip-node'>🔷 TypeScript</span>
          </div>
        </div>
      </div>

      <a href='#about' className='scroll-down' aria-label='Scroll down'>
        <span className='mouse'>
          <span className='wheel'></span>
        </span>
        <span className='scroll-text'>Scroll</span>
      </a>
    </header>
  )
}

export default Header
