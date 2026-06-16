import '../assets/styles/experience.css'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiBootstrap,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiExpress,
  SiGit,
} from 'react-icons/si'

const frontend = [
  { name: 'React', level: 'Experienced', icon: <SiReact />, color: '#61dafb' },
  { name: 'JavaScript', level: 'Experienced', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'HTML5', level: 'Experienced', icon: <SiHtml5 />, color: '#e34f26' },
  { name: 'CSS3', level: 'Experienced', icon: <SiCss3 />, color: '#1572b6' },
  { name: 'Vue', level: 'Intermediate', icon: <SiVuedotjs />, color: '#42b883' },
  { name: 'Bootstrap', level: 'Experienced', icon: <SiBootstrap />, color: '#7952b3' },
]

const backend = [
  { name: 'Node.js', level: 'Experienced', icon: <SiNodedotjs />, color: '#3c873a' },
  { name: 'Express', level: 'Experienced', icon: <SiExpress />, color: '#dddddd' },
  { name: 'MongoDB', level: 'Experienced', icon: <SiMongodb />, color: '#47a248' },
  { name: 'MySQL', level: 'Intermediate', icon: <SiMysql />, color: '#4479a1' },
  { name: 'PHP', level: 'Intermediate', icon: <SiPhp />, color: '#777bb4' },
  { name: 'Git', level: 'Experienced', icon: <SiGit />, color: '#f05032' },
]

const SkillCard = ({ name, level, icon, color }) => (
  <article className='skill-card reveal'>
    <span className='skill-icon' style={{ color }}>
      {icon}
    </span>
    <div className='skill-meta'>
      <h4>{name}</h4>
      <small className='text-light'>{level}</small>
    </div>
  </article>
)

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='reveal'>What Skills I Have</h5>
      <h2 className='reveal'>My Tech Stack</h2>

      <div className='container experience-container'>
        <div className='experience-panel reveal'>
          <h3>Frontend Development</h3>
          <div className='skills-grid'>
            {frontend.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        <div className='experience-panel reveal'>
          <h3>Backend Development</h3>
          <div className='skills-grid'>
            {backend.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
