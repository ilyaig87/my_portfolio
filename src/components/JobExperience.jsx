import '../assets/styles/jobExperience.css'
import DATA from '../assets/images/data-map.png'
import KAV from '../assets/images/kav.png'
import BENEDICT from '../assets/images/benedict.jpg'

const JobExperience = () => {
  const data = [
    {
      id: 1,
      title: 'Data-Map Group',
      profession: 'Autocad Drafter',
      date: '2020 - 2022',
      text1: `Managed several projects and acting as the main focal point that
      facilitated communication between all counterparts while accomplishing
      goals in a timely manner.`,
      text2: `Implemented an efficient work procedure that saved me and my
      colleagues time.`,
      img: DATA,
    },
    {
      id: 2,
      title: 'Kav-Medida Group',
      profession: 'Autocad Drafter',
      date: '2018 - 2020',
      text1: ` Manage multiple teams by coordinating, planning, and implementing daily
      projects.`,
      text2: `Identify project requirements and modify designs in accordance with
      company standards and best practices through direct coordination with
      engineers and project managers.`,
      img: KAV,
    },
    {
      id: 3,
      title: 'Benedict Restaurant',
      profession: 'Operation and Bar Manager',
      date: '2012 - 2018',
      text1: `Manage all operational aspects of the business to ensure business goals
      are met.`,
      text2: `Recruit, train, and lead large teams, define work processes, procedures
      and targets.`,
      text3: `Responsible for short- & long-term commercial planning.`,
      img: BENEDICT,
    },
  ]

  return (
    <section id='job-experience'>
      <h2>My Work Experience</h2>

      <div className='container job-experience-container '>
        <article className='job-experience grid'>
          {data.map(
            ({ id, title, date, text1, text2, text3, img, profession }) => {
              return (
                <section className='job-experience-section' key={id}>
                  <div className='job-experience-complex grid'>
                    <div className='job-experience-img flex'>
                      <img src={img} alt='' />
                    </div>
                    <div className='job-experience-prof flex'>
                      <h3>{title}</h3>
                      <h5>{profession}</h5>
                      <small>{date}</small>
                    </div>
                  </div>

                  <div className='job-experience-about'>
                    <ul>
                      <li>{text1}</li>
                      <li>{text2}</li>
                      <li>{text3}</li>
                    </ul>
                  </div>
                </section>
              )
            }
          )}
        </article>
      </div>
    </section>
  )
}

export default JobExperience
