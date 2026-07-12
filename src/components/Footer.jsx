import '../assets/styles/footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Skills' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#job-experience', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer>
      <a href='#top' className='footer-logo gradient-text'>
        Ilya Griss
      </a>
      <p className='footer-tagline'>Full-Stack Developer · Building the web, one project at a time.</p>

      <ul className='footer-links'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <div className='footer-socials'>
        <a href='https://github.com/ilyaig87' target='_blank' rel='noreferrer' aria-label='GitHub'>
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/ilya-griss/'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
        >
          <BsLinkedin />
        </a>
        <a href='mailto:ilyaig8@gmail.com' aria-label='Email'>
          <FiMail />
        </a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; {new Date().getFullYear()} Ilya Griss. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
