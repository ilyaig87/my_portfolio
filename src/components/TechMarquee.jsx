import '../assets/styles/techMarquee.css'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSass,
  SiVercel,
  SiGit,
  SiGithubactions,
  SiAmazon,
} from 'react-icons/si'
import { BsStars } from 'react-icons/bs'

const items = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'PHP / Yii2', icon: <SiPhp /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SCSS', icon: <SiSass /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
  { name: 'AWS', icon: <SiAmazon /> },
  { name: 'AI-Assisted', icon: <BsStars /> },
]

const TechMarquee = () => {
  const row = [...items, ...items]
  return (
    <div className='tech-marquee' aria-hidden='true'>
      <div className='tech-marquee-track'>
        {row.map((item, i) => (
          <span className='tech-chip' key={i}>
            <span className='tech-chip-icon'>{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
