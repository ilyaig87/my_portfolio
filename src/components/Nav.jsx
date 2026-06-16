import '../assets/styles/nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser, BiBookOpen } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { TbMessageCircle, TbSchool } from 'react-icons/tb'
import { BsBriefcase } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const links = [
  { id: 'top', icon: <AiOutlineHome />, label: 'Home' },
  { id: 'about', icon: <BiUser />, label: 'About' },
  { id: 'experience', icon: <BiBookOpen />, label: 'Skills' },
  { id: 'portfolio', icon: <BsBriefcase />, label: 'Projects' },
  { id: 'job-experience', icon: <MdWorkOutline />, label: 'Work' },
  { id: 'education', icon: <TbSchool />, label: 'Education' },
  { id: 'contact', icon: <TbMessageCircle />, label: 'Contact' },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('top')

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav>
      {links.map(({ id, icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setActiveNav(id)}
          className={activeNav === id ? 'active' : ''}
          aria-label={label}
        >
          {icon}
          <span className='nav-tooltip'>{label}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav
