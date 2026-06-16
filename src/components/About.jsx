import '../assets/styles/about.css'
import Me from '../assets/images/me3.jpg'
import { ImBooks } from 'react-icons/im'
import { BsBriefcase } from 'react-icons/bs'
import { FiAward } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5 className='reveal'>Get To Know</h5>
      <h2 className='reveal'>About Me</h2>

      <div className='container about-container'>
        <div className='about-me reveal'>
          <div className='about-me-img'>
            <img src={Me} alt='Ilya Griss' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card reveal'>
              <BsBriefcase className='about-icon' />
              <h5>Experience</h5>
              <small>Full-Stack · 2+ yrs</small>
            </article>
            <article className='about-card reveal'>
              <ImBooks className='about-icon' />
              <h5>Tech Stack</h5>
              <small>React · TS · PHP</small>
            </article>
            <article className='about-card reveal'>
              <FiAward className='about-icon' />
              <h5>Education</h5>
              <small>Coding Academy</small>
            </article>
          </div>

          <p className='reveal'>
            Full-Stack Developer specializing in React, TypeScript, PHP/Yii2,
            and MySQL, with end-to-end responsibility for a business-critical
            CRM and vehicle-financing platform used daily by sales, finance, and
            back-office teams. Experienced in translating complex operational
            requirements into reliable production features, financial workflows,
            database architecture, and third-party API integrations.
          </p>

          <div className='about-langs reveal'>
            <span>🇮🇱 Hebrew — Native</span>
            <span>🇬🇧 English — Fluent</span>
            <span>🇷🇺 Russian — Native</span>
          </div>

          <a href='#contact' className='btn btn-primary reveal'>
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
