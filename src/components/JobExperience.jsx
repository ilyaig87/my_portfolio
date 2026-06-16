import '../assets/styles/jobExperience.css'
import DATA from '../assets/images/data-map.png'
import { FaCarSide, FaLaptopCode } from 'react-icons/fa'

const data = [
  {
    id: 1,
    title: 'Wheelie Car Finance',
    profession: 'Full-Stack Developer',
    date: '2024 — Present',
    icon: <FaCarSide />,
    points: [
      "Primary developer and technical owner of the company's business-critical CRM and vehicle-financing platform, built with React, PHP/Yii2 and MySQL.",
      'Designed and implemented end-to-end financing workflows — customer onboarding, loan calculations, document processing, status tracking and back-office operations.',
      'Built financial calculators and workflow automations that cut manual application processing time by ~40%.',
      'Reduced average page load times by ~35% through query optimization, backend caching and frontend lazy loading.',
    ],
  },
  {
    id: 2,
    title: 'Freelance',
    profession: 'Full-Stack Developer',
    date: '2022 — 2024',
    icon: <FaLaptopCode />,
    points: [
      'Delivered responsive web applications using React, Node.js, Express and SQL/NoSQL databases for a range of client business needs.',
      'Built reusable UI components, secure authentication systems, custom admin dashboards and third-party REST API integrations.',
      'Worked directly with clients to scope MVPs and ship production features from wireframes to hosting — improving load times by up to 50%.',
    ],
  },
  {
    id: 3,
    title: 'DataMap G.I.S Group',
    profession: 'AutoCAD Drafter',
    date: '2020 — 2022',
    img: DATA,
    points: [
      'Created technical drawings and engineering schematics in a structured, deadline-driven technical environment.',
      'Coordinated between counterparts and implemented efficient procedures that saved the team valuable time.',
    ],
  },
]

const JobExperience = () => {
  return (
    <section id='job-experience'>
      <h5 className='reveal'>Where I've Worked</h5>
      <h2 className='reveal'>Work Experience</h2>

      <div className='container timeline'>
        {data.map(({ id, title, profession, date, points, img, icon }) => (
          <article className='timeline-item reveal' key={id}>
            <span className='timeline-dot'></span>
            <div className='timeline-card'>
              <div className='timeline-head'>
                <div className='timeline-logo'>
                  {img ? (
                    <img src={img} alt={title} />
                  ) : (
                    <span className='timeline-logo-icon'>{icon}</span>
                  )}
                </div>
                <div>
                  <h3>{title}</h3>
                  <h5 className='gradient-text'>{profession}</h5>
                  <small>{date}</small>
                </div>
              </div>
              <ul className='timeline-points'>
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JobExperience
