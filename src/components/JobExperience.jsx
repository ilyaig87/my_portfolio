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
      "Serve as the primary developer and technical owner of the company's business-critical CRM and vehicle-financing platform using React, PHP/Yii2, and MySQL.",
      'Designed and implemented end-to-end vehicle-financing workflows covering customer onboarding, loan calculations, document processing, status tracking, and internal back-office operations.',
      'Translate business and operational requirements into production-ready features, managing database schema design and building secure backend services.',
      'Developed financial calculators and workflow automations that reduced manual application processing time by approximately 40% by centralizing customer, vehicle, and financing data within the CRM.',
      'Reduced average page load times by approximately 35% through database query optimization, backend caching, and frontend lazy loading.',
      'Provide ongoing production support for a business-critical system, diagnose cross-stack issues, and deliver urgent fixes and high-priority features with minimal disruption to daily operations.',
    ],
  },
  {
    id: 2,
    title: 'Freelance',
    profession: 'Full-Stack Developer',
    date: '2022 — 2024',
    icon: <FaLaptopCode />,
    points: [
      'Developed and delivered responsive web applications using React, Node.js, Express, and relational/NoSQL databases for various client business needs.',
      'Built reusable UI components, secure authentication systems, custom admin dashboards, and seamless integrations with third-party REST APIs.',
      'Worked directly with clients to define technical requirements, scope MVPs, and deploy production features from initial wireframes to server hosting.',
      'Diagnosed frontend bottlenecks using Chrome DevTools and improved page load times by up to 50% through asset optimization, code splitting, and state management improvements.',
    ],
  },
  {
    id: 3,
    title: 'DataMap G.I.S Group',
    profession: 'CAD Engineer',
    date: '2020 — 2022',
    img: DATA,
    points: [
      'Created technical drawings and engineering schematics while working in a structured, deadline-driven technical environment.',
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
