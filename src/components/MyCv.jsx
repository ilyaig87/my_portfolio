import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import MyCV from '../assets/downloads/Ilya Griss- CV.pdf'

const MyCv = () => {
  return (
    <div className='my-cv'>
      <a href={MyCV} download className='btn btn-primary'>
        <FiDownload /> Download CV
      </a>
      <a href='#contact' className='btn'>
        <HiOutlineChatBubbleLeftRight /> Let's talk
      </a>
    </div>
  )
}

export default MyCv
