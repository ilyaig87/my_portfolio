import '../assets/styles/footer.css'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>
        Ilya Griss
      </a>

      <ul className='footer-links flex'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#jobExperience'>Job Experience</a>
        </li>
        <li>
          <a href='#education'>Education</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer-socials flex'>
        <a href='https://github.com/ilyaig87' target='_blank'>
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/ilya-griss/' target='_blank'>
          <BsLinkedin />
        </a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Ilya Griss. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
