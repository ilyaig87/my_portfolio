import '../assets/styles/aiEdge.css'
import Terminal from './Terminal'
import { BsStars } from 'react-icons/bs'
import { SiOpenai } from 'react-icons/si'
import { FaRobot } from 'react-icons/fa'
import { TbPrompt, TbRocket } from 'react-icons/tb'
import {
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineBolt,
} from 'react-icons/hi2'

const pillars = [
  {
    icon: <TbRocket />,
    title: 'Ship Faster',
    text: 'AI-assisted workflows let me move from idea to production feature in a fraction of the time — without cutting corners.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Full Ownership',
    text: 'AI writes with me, not for me. I review, test and take full responsibility for every line that reaches production.',
  },
  {
    icon: <HiOutlineCpuChip />,
    title: 'Solve the Hard Stuff',
    text: 'I lean on AI to reason through complex architecture, debugging and cross-stack issues on a business-critical platform.',
  },
  {
    icon: <HiOutlineBolt />,
    title: 'Higher Code Quality',
    text: 'AI-driven review, refactoring and edge-case hunting keep the codebase clean, tested and maintainable.',
  },
]

const tools = [
  { name: 'ChatGPT', icon: <SiOpenai />, color: '#10a37f' },
  { name: 'Claude Code', icon: <BsStars />, color: '#d97757' },
  { name: 'GitHub Copilot', icon: <FaRobot />, color: '#a371f7' },
  { name: 'Prompt Engineering', icon: <TbPrompt />, color: '#ec4899' },
]

const AiEdge = () => {
  return (
    <section id='ai-edge'>
      <div className='container ai-edge-shell reveal'>
        <div className='ai-glow' aria-hidden='true'></div>

        <div className='ai-edge-head'>
          <span className='ai-eyebrow'>
            <BsStars /> AI-Powered Engineering
          </span>
          <h2>
            I build with <span className='gradient-text'>AI as a force multiplier</span>
          </h2>
          <p>
            I use AI tools every single day to speed up development, raise code
            quality and crack complex technical problems — while owning every
            decision that ships to production. It&apos;s not a gimmick in my
            workflow; it&apos;s how I deliver more, faster, and better.
          </p>
        </div>

        <div className='ai-terminal-wrap'>
          <Terminal />
        </div>

        <div className='ai-pillars'>
          {pillars.map(({ icon, title, text }) => (
            <article className='ai-pillar' data-tilt key={title}>
              <span className='ai-pillar-icon'>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className='ai-toolbelt'>
          <span className='ai-toolbelt-label'>My daily AI toolbelt</span>
          <ul>
            {tools.map(({ name, icon, color }) => (
              <li key={name} style={{ '--tool-color': color }}>
                <span className='ai-tool-icon'>{icon}</span>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AiEdge
