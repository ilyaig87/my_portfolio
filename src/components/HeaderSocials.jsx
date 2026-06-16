import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a
        href='https://www.linkedin.com/in/ilya-griss/'
        target='_blank'
        rel='noreferrer'
        aria-label='LinkedIn'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/ilyaig87'
        target='_blank'
        rel='noreferrer'
        aria-label='GitHub'
      >
        <FaGithubSquare />
      </a>
      <a href='mailto:ilyaig8@gmail.com' aria-label='Email'>
        <FiMail />
      </a>
    </div>
  )
}

export default HeaderSocials
