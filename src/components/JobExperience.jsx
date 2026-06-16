import '../assets/styles/jobExperience.css'
import DATA from '../assets/images/data-map.png'
import KAV from '../assets/images/kav.png'
import BENEDICT from '../assets/images/benedict.jpg'

const data = [
  {
    id: 1,
    title: 'Data-Map Group',
    profession: 'AutoCAD Drafter',
    date: '2020 — 2022',
    points: [
      'Managed several projects as the main focal point, facilitating communication between all counterparts while meeting goals on time.',
      'Implemented an efficient work procedure that saved the team valuable time.',
    ],
    img: DATA,
  },
  {
    id: 2,
    title: 'Kav-Medida Group',
    profession: 'AutoCAD Drafter',
    date: '2018 — 2020',
    points: [
      'Managed multiple teams by coordinating, planning and implementing daily projects.',
      'Identified project requirements and modified designs to company standards via direct coordination with engineers and project managers.',
    ],
    img: KAV,
  },
  {
    id: 3,
    title: 'Benedict Restaurant',
    profession: 'Operations & Bar Manager',
    date: '2012 — 2018',
    points: [
      'Managed all operational aspects of the business to ensure goals were met.',
      'Recruited, trained and led large teams, defining work processes and targets.',
      'Responsible for short- & long-term commercial planning.',
    ],
    img: BENEDICT,
  },
]

const JobExperience = () => {
  return (
    <section id='job-experience'>
      <h5 className='reveal'>Where I've Worked</h5>
      <h2 className='reveal'>Work Experience</h2>

      <div className='container timeline'>
        {data.map(({ id, title, profession, date, points, img }) => (
          <article className='timeline-item reveal' key={id}>
            <span className='timeline-dot'></span>
            <div className='timeline-card'>
              <div className='timeline-head'>
                <div className='timeline-logo'>
                  <img src={img} alt={title} />
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
