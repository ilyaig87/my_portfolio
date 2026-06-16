import '../assets/styles/about.css'
import Me from '../assets/images/me3.jpg'
import { ImBooks } from 'react-icons/im'
import { AiFillFolderOpen } from 'react-icons/ai'
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
            <a href='#portfolio' className='reveal'>
              <article className='about-card'>
                <AiFillFolderOpen className='about-icon' />
                <h5>My Projects</h5>
                <small>8+ shipped</small>
              </article>
            </a>
            <a href='#experience' className='reveal'>
              <article className='about-card'>
                <ImBooks className='about-icon' />
                <h5>My Knowledge</h5>
                <small>10+ technologies</small>
              </article>
            </a>
            <a href='#education' className='reveal'>
              <article className='about-card'>
                <FiAward className='about-icon' />
                <h5>Education</h5>
                <small>Coding Academy</small>
              </article>
            </a>
          </div>

          <p className='reveal'>
            I am a driven, devoted and enthusiastic developer seeking my first
            opportunity as a Full Stack Developer after graduating the Coding
            Academy's 640-hour bootcamp. I love turning ideas into polished,
            performant products — and I want to make an impact as part of a team
            that's passionate about its goals.
          </p>

          <a href='#contact' className='btn btn-primary reveal'>
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
