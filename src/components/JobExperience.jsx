import '../assets/styles/jobExperience.css'
import { FaCarSide, FaLaptopCode } from 'react-icons/fa'

const data = [
  {
    id: 1,
    title: 'Wheelie Car Finance',
    profession: 'Full-Stack Developer',
    date: '2024 — Present',
    icon: <FaCarSide />,
    points: [
      "Sole Full-Stack Developer owning the company's business-critical CRM and vehicle-financing platform (React, PHP/Yii2, MySQL) — from database design through backend services to frontend implementation.",
      'Built and maintain end-to-end financing workflows: customer onboarding, loan processing, document management, payment calculations and internal operational tools.',
      'Automated manual workflows with internal tools, reducing financing-application processing time by ~25% and cutting repetitive manual data entry across the team.',
      'Improved performance through database query optimization, backend caching and frontend lazy loading — reducing core CRM dashboard and financial-report load times by ~30%.',
      'Debug and resolve production issues across frontend, backend, REST APIs and database layers, shipping high-priority features with minimal disruption to business operations.',
      'Partner directly with business stakeholders to define requirements, prioritize the roadmap and deliver production-ready solutions.',
    ],
  },
  {
    id: 2,
    title: 'Freelance',
    profession: 'Full-Stack Developer',
    date: 'Nov 2022 — Present',
    icon: <FaLaptopCode />,
    points: [
      'Indicator (indicator.co.il) — built and shipped a production e-learning platform for stock-market courses (Next.js, TypeScript, PostgreSQL): card payments with automated invoicing and transactional emails, a student area with lesson player and progress tracking, and full authentication (Clerk).',
      'Designed a custom CMS from scratch for live, in-place editing of all site content, plus an admin panel for managing courses, students and purchases — deployed on Vercel, serving paying customers end-to-end.',
      'Developed and deployed an AI-powered educational web application (Next.js/Vercel), owning end-to-end architecture, UI design, branding and dynamic feature implementation.',
      'Managed projects end-to-end — requirements, technical planning, deployment, testing and production support — while optimizing performance, responsiveness and SEO.',
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
