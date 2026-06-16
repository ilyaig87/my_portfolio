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
            Open to new opportunities
          </span>

          <h5>Hello, I'm</h5>
          <h1>
            Ilya Griss
            <span className='wave'>👋</span>
          </h1>
          <h2 className='header-role gradient-text'>Full-Stack Developer</h2>
          <p className='header-tagline'>
            I build production-grade web platforms with React, TypeScript and
            PHP/Yii2 — turning complex business logic into fast, reliable
            products.
          </p>

          <MyCv />
          <HeaderSocials />

          <ul className='header-stats'>
            <li>
              <strong>2+</strong>
              <span>Years experience</span>
            </li>
            <li>
              <strong>~40%</strong>
              <span>Faster workflows</span>
            </li>
            <li>
              <strong>~50%</strong>
              <span>Faster load times</span>
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
            <span className='floating-chip chip-node'>🔷 TypeScript</span>
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
