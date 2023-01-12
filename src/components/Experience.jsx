import '../assets/styles/experience.css'
import { BsCheckCircle } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience-container grid'>
        <div className='experienced-fronted'>
          <h3>Fronted Development</h3>
          <div className='experience-content grid'>
            <article className='experience-details '>
              <BsCheckCircle className='experience-details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsCheckCircle className='experience-details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsCheckCircle className='experience-details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsCheckCircle className='experience-details-icon' />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsCheckCircle className='experience-details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsCheckCircle className='experience-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experienced-backend'>
          <div className='experienced-backend'>
            <h3>Backend Development</h3>
            <div className='experience-content grid'>
              <article className='experience-details'>
                <BsCheckCircle className='experience-details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <BsCheckCircle className='experience-details-icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <BsCheckCircle className='experience-details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience-details'>
                <BsCheckCircle className='experience-details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
