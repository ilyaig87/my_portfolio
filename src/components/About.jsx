import '../assets/styles/about.css'
import Me from '../assets/images/me3.jpg'
import { ImBooks } from 'react-icons/im'
import { AiFillFolderOpen } from 'react-icons/ai'
import { useState } from 'react'

const About = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={Me} alt='about img' />
          </div>
        </div>
        <div className='about-content'>
          <div className='about-cards'>
            <a href='#portfolio' onClick={() => setActiveNav('#contact')}>
              <article className='about-card'>
                <AiFillFolderOpen className='about-icon' />
                <h5>My Projects</h5>
              </article>
            </a>
            <a href='#experience' onClick={() => setActiveNav('#experience')}>
              <article className='about-card'>
                <ImBooks className='about-icon' />
                <h5>My Knowledge</h5>
              </article>
            </a>
          </div>
          <p>
            I am a driven, devoted and enthusiastic individual who is seeking my
            first opportunity as a Full Stack Developer after graduating the
            Coding Academy’s 640-hour bootcamp. I want to make an impact and
            give my all in order to be a part of a team that is passionate about
            their product and goals.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
