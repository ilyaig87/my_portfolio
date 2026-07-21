import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import '../assets/styles/commandPalette.css'
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiCommand,
  FiSearch,
  FiCornerDownLeft,
} from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import CV from '../assets/downloads/Ilya Griss- CV.pdf'

const scrollTo = (id) => () => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const openUrl = (url) => () => window.open(url, '_blank', 'noopener,noreferrer')

const CommandPalette = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const commands = useMemo(
    () => [
      { group: 'Navigate', label: 'Home', icon: <FiHome />, run: scrollTo('top') },
      { group: 'Navigate', label: 'About', icon: <FiUser />, run: scrollTo('about') },
      { group: 'Navigate', label: 'AI-Powered Engineering', icon: <BsStars />, run: scrollTo('ai-edge') },
      { group: 'Navigate', label: 'Tech Stack / Skills', icon: <FiCode />, run: scrollTo('experience') },
      { group: 'Navigate', label: 'Projects', icon: <FiBriefcase />, run: scrollTo('portfolio') },
      { group: 'Navigate', label: 'Work Experience', icon: <FiBriefcase />, run: scrollTo('job-experience') },
      { group: 'Navigate', label: 'Education', icon: <FiBookOpen />, run: scrollTo('education') },
      { group: 'Navigate', label: 'Contact', icon: <FiMail />, run: scrollTo('contact') },
      { group: 'Actions', label: 'Download CV', icon: <FiDownload />, run: () => { const a = document.createElement('a'); a.href = CV; a.download = 'Ilya Griss - CV.pdf'; a.click() } },
      { group: 'Actions', label: 'Email me', icon: <FiMail />, run: openUrl('mailto:ilyaig8@gmail.com') },
      { group: 'Links', label: 'GitHub', icon: <FiGithub />, run: openUrl('https://github.com/ilyaig87') },
      { group: 'Links', label: 'LinkedIn', icon: <FiLinkedin />, run: openUrl('https://www.linkedin.com/in/ilya-griss/') },
      { group: 'Links', label: 'Indicator — Live Site', icon: <FiExternalLink />, run: openUrl('https://indicator.co.il/') },
    ],
    []
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q))
  }, [query, commands])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }, [])

  const runAt = useCallback(
    (i) => {
      const cmd = filtered[i]
      if (!cmd) return
      close()
      // let the overlay close before scrolling/opening
      setTimeout(cmd.run, 60)
    },
    [filtered, close]
  )

  // Global hotkey
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30)
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    const el = listRef.current?.querySelector('.cmdk-item.is-active')
    if (el) el.scrollIntoView({ block: 'nearest' })
  }, [active])

  const onListKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runAt(active)
    }
  }

  let flatIndex = -1

  return (
    <>
      <button
        className='cmdk-trigger'
        onClick={() => setOpen(true)}
        aria-label='Open command menu'
      >
        <FiCommand />
        <span>Menu</span>
        <kbd>⌘K</kbd>
      </button>

      {open && (
        <div className='cmdk-overlay' onMouseDown={close}>
          <div
            className='cmdk-panel'
            role='dialog'
            aria-modal='true'
            aria-label='Command menu'
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
          >
            <div className='cmdk-search'>
              <FiSearch />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Jump to a section, download CV, open links…'
                aria-label='Search commands'
              />
              <kbd>ESC</kbd>
            </div>

            <div className='cmdk-list' ref={listRef}>
              {filtered.length === 0 && (
                <div className='cmdk-empty'>No matches for “{query}”</div>
              )}
              {filtered.map((cmd, i, arr) => {
                flatIndex++
                const idx = flatIndex
                const showGroup = i === 0 || arr[i - 1].group !== cmd.group
                return (
                  <div key={cmd.label}>
                    {showGroup && <div className='cmdk-group'>{cmd.group}</div>}
                    <button
                      className={`cmdk-item ${idx === active ? 'is-active' : ''}`}
                      onMouseMove={() => setActive(idx)}
                      onClick={() => runAt(idx)}
                    >
                      <span className='cmdk-item-icon'>{cmd.icon}</span>
                      <span className='cmdk-item-label'>{cmd.label}</span>
                      {idx === active && (
                        <span className='cmdk-item-enter'>
                          <FiCornerDownLeft />
                        </span>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>

            <div className='cmdk-foot'>
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> select</span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CommandPalette
