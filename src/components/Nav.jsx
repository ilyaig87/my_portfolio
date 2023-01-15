import '../assets/styles/nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser, BiBookOpen } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { MdWorkOutline } from 'react-icons/md'
import { TbMessageCircle, TbSchool } from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookOpen />
      </a>
      <a
        href='#job-experience'
        onClick={() => setActiveNav('#job-experience')}
        className={activeNav === '#job-experience' ? 'active' : ''}
      >
        <MdWorkOutline />
      </a>
      <a
        href='#education'
        onClick={() => setActiveNav('#education')}
        className={activeNav === '#education' ? 'active' : ''}
      >
        <TbSchool />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TbMessageCircle />
      </a>
    </nav>
  )
}

export default Nav
