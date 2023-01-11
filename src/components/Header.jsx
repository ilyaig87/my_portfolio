import '../assets/styles/header.css'
import MyCv from './MyCv'
import ME from '../assets/images/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Ilya Griss</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <MyCv />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />

          <a href='#contact' className='scroll-down'></a>
        </div>
      </div>
    </header>
  )
}

export default Header
