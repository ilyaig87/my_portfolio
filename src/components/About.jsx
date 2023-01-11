import '../assets/styles/about.css'
import Me from '../assets/images/me3.jpg'
import { ImBooks } from 'react-icons/im'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => (
  <section id='about-container'>
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
          <article className='about-card'>
            <AiFillFolderOpen className='about-icon' />
            <h5>Projects</h5>
            <small>Go to see</small>
          </article>
          <article className='about-card'>
            <ImBooks className='about-icon' />
            <h5>My Knowledge</h5>
            <small></small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsam
          voluptates sint dolorem tempora unde expedita porro id corporis,
          necessitatibus voluptatem error, vero ratione. Asperiores velit
          inventore consequatur ullam earum!
        </p>
        <a href='#contact' className='btn btn-primary'>
          Let's talk
        </a>
      </div>
    </div>
  </section>
)

export default About
