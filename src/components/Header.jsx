import '../assets/styles/header.css'
import MyCv from './MyCv'
import ME from '../assets/images/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='top'>
      <div className='header-bg'>
        <span className='blob blob-1'></span>
        <span className='blob blob-2'></span>
        <span className='blob blob-3'></span>
      </div>

      <div className='container header-container'>
        <div className='header-text'>
          <span className='availability-badge'>
            <span className='pulse-dot'></span>
            Available for new opportunities
          </span>

          <h5>Hello, I'm</h5>
          <h1>
            Ilya Griss
            <span className='wave'>👋</span>
          </h1>
          <h2 className='header-role gradient-text'>Fullstack Developer</h2>
          <p className='header-tagline'>
            I craft fast, accessible and beautiful web experiences with React,
            Node.js and a sharp eye for detail.
          </p>

          <MyCv />
          <HeaderSocials />

          <ul className='header-stats'>
            <li>
              <strong>640+</strong>
              <span>Bootcamp hours</span>
            </li>
            <li>
              <strong>8+</strong>
              <span>Projects shipped</span>
            </li>
            <li>
              <strong>10+</strong>
              <span>Technologies</span>
            </li>
          </ul>
        </div>

        <div className='header-visual'>
          <div className='me'>
            <div className='me-ring'></div>
            <div className='me-img'>
              <img src={ME} alt='Ilya Griss' />
            </div>
            <span className='floating-chip chip-react'>⚛️ React</span>
            <span className='floating-chip chip-node'>🟢 Node.js</span>
          </div>
        </div>
      </div>

      <a href='#about' className='scroll-down' aria-label='Scroll down'>
        <span className='mouse'>
          <span className='wheel'></span>
        </span>
        <span className='scroll-text'>Scroll</span>
      </a>
    </header>
  )
}

export default Header
