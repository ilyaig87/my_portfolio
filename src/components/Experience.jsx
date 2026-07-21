import '../assets/styles/experience.css'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAmazon,
  SiVercel,
  SiGithubactions,
} from 'react-icons/si'
import { TbApi, TbShieldLock } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'
import { FaRobot } from 'react-icons/fa'

const groups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact />, color: '#61dafb' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#e5e7eb' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
      { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6' },
      { name: 'SCSS', icon: <SiSass />, color: '#cd6799' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#3c873a' },
      { name: 'Express', icon: <SiExpress />, color: '#dddddd' },
      { name: 'PHP / Yii2', icon: <SiPhp />, color: '#777bb4' },
      { name: 'REST APIs', icon: <TbApi />, color: '#38bdf8' },
      { name: 'Auth', icon: <TbShieldLock />, color: '#f59e0b' },
    ],
  },
  {
    title: 'Databases & DevOps',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169e1' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      { name: 'Git', icon: <SiGit />, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#e5e7eb' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088ff' },
      { name: 'Vercel', icon: <SiVercel />, color: '#e5e7eb' },
      { name: 'AWS', icon: <SiAmazon />, color: '#ff9900' },
    ],
  },
  {
    title: 'AI-Assisted Development',
    skills: [
      { name: 'Claude Code', icon: <BsStars />, color: '#d97757' },
      { name: 'GitHub Copilot', icon: <FaRobot />, color: '#8957e5' },
    ],
  },
]

const SkillCard = ({ name, icon, color }) => (
  <article className='skill-card reveal'>
    <span className='skill-icon' style={{ color }}>
      {icon}
    </span>
    <div className='skill-meta'>
      <h4>{name}</h4>
    </div>
  </article>
)

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='reveal'>What Skills I Have</h5>
      <h2 className='reveal'>My Tech Stack</h2>

      <div className='container experience-container'>
        {groups.map(({ title, skills }) => (
          <div className='experience-panel reveal' key={title}>
            <h3>{title}</h3>
            <div className='skills-grid'>
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
