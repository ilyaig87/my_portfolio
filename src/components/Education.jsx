import '../assets/styles/education.css'
import CA from '../assets/images/ca.png'
import SHENKAR from '../assets/images/shenkar.png'

const data = [
  {
    id: 1,
    title: 'Coding Academy',
    profession: 'Full-Stack Web Development Program',
    date: 'Jul 2022 — Nov 2022',
    text: `An intensive 4-month, full-time (8:30–18:30) program covering data
    structures, networking and OOP, plus hands-on projects in JavaScript,
    HTML, CSS, React, Vue and Node.js.`,
    img: CA,
  },
  {
    id: 2,
    title: 'Shenkar College',
    profession: 'Practical Engineer',
    date: '2016 — 2019',
    text: `Completed a practical engineering diploma through evening studies,
    gaining deep knowledge in construction site management, statics,
    construction and geodesy.`,
    img: SHENKAR,
  },
]

const Education = () => {
  return (
    <section id='education'>
      <h5 className='reveal'>What I Learned</h5>
      <h2 className='reveal'>My Education</h2>

      <div className='container education-grid'>
        {data.map(({ id, title, profession, date, text, img }) => (
          <article className='education-card reveal' key={id}>
            <div className='education-head'>
              <div className='education-logo'>
                <img src={img} alt={title} />
              </div>
              <div>
                <h3>{title}</h3>
                <h5 className='gradient-text'>{profession}</h5>
                <small>{date}</small>
              </div>
            </div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
