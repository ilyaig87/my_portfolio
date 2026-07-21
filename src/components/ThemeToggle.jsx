import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import '../assets/styles/themeToggle.css'

const getInitial = () => {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') || 'dark'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* ignore */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      className='theme-toggle'
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title='Toggle theme'
    >
      <span className='theme-toggle-track'>
        <span className='theme-toggle-thumb'>
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </span>
      </span>
    </button>
  )
}

export default ThemeToggle
