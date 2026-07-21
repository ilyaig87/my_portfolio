import { useEffect, useState } from 'react'
import '../assets/styles/preloader.css'

const Preloader = () => {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [done, setDone] = useState(reduced)
  const [gone, setGone] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setDone(true), 1500)
    const t2 = setTimeout(() => {
      setGone(true)
      document.body.style.overflow = ''
    }, 2200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = ''
    }
  }, [reduced])

  if (gone) return null

  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden='true'>
      <div className='preloader-inner'>
        <svg className='preloader-mark' viewBox='0 0 24 24' fill='none'>
          <path
            d='M3 17l5-6 4 4 8-9'
            stroke='url(#pg)'
            strokeWidth='2.4'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='pl-line'
          />
          <path
            d='M21 6v5h-5'
            stroke='url(#pg)'
            strokeWidth='2.4'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='pl-line pl-line-2'
          />
          <defs>
            <linearGradient id='pg' x1='0' y1='0' x2='24' y2='24'>
              <stop offset='0' stopColor='#22d3ee' />
              <stop offset='1' stopColor='#a855f7' />
            </linearGradient>
          </defs>
        </svg>
        <span className='preloader-name'>Ilya Griss</span>
        <span className='preloader-bar'>
          <span className='preloader-bar-fill'></span>
        </span>
      </div>
    </div>
  )
}

export default Preloader
