import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <FaGithubSquare />
      </a>
    </div>
  )
}

export default HeaderSocials
