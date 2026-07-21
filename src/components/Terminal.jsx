import { useEffect, useRef, useState } from 'react'

// A scripted "AI-assisted dev session" that types itself out.
const LINES = [
  { type: 'cmd', text: 'claude "add a loan-eligibility calculator to the CRM"' },
  { type: 'muted', text: '⠿ analyzing codebase · 142 files indexed' },
  { type: 'ok', text: 'generated LoanCalculator.tsx + unit tests' },
  { type: 'ok', text: 'wired POST /api/eligibility (Yii2 controller)' },
  { type: 'cmd', text: 'npm test' },
  { type: 'ok', text: '24 passing (1.2s)' },
  { type: 'cmd', text: 'git commit -m "feat: loan-eligibility calculator"' },
  { type: 'accent', text: '→ reviewed, validated & shipped to production 🚀' },
]

const PROMPT = 'ilya@wheelie ~/crm $ '

const Terminal = () => {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  // Start when scrolled into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStarted(true)
      setLineIdx(LINES.length)
      return
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Typewriter loop
  useEffect(() => {
    if (!started || lineIdx >= LINES.length) return
    const line = LINES[lineIdx]
    const isCmd = line.type === 'cmd'
    if (charIdx < line.text.length) {
      const speed = isCmd ? 42 : 8
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed)
      return () => clearTimeout(t)
    }
    const pause = isCmd ? 380 : 160
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1)
      setCharIdx(0)
    }, pause)
    return () => clearTimeout(t)
  }, [started, lineIdx, charIdx])

  const done = lineIdx >= LINES.length

  return (
    <div className='terminal' ref={ref}>
      <div className='terminal-bar'>
        <span className='terminal-dots'>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className='terminal-title'>claude-code — zsh</span>
      </div>
      <div className='terminal-body'>
        {LINES.slice(0, lineIdx + 1).map((line, i) => {
          if (i >= LINES.length) return null
          const text = i === lineIdx ? line.text.slice(0, charIdx) : line.text
          const typing = i === lineIdx && !done
          return (
            <div className={`term-line term-${line.type}`} key={i}>
              {line.type === 'cmd' && <span className='term-prompt'>{PROMPT}</span>}
              <span className='term-text'>{text}</span>
              {typing && <span className='term-caret' />}
            </div>
          )
        })}
        {done && (
          <div className='term-line term-cmd'>
            <span className='term-prompt'>{PROMPT}</span>
            <span className='term-caret' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal
