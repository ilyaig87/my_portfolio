import React from 'react'
import MyCV from '../assets/downloads/MyCV.pdf'

const MyCv = () => {
  return (
    <div className='my-cv'>
      <a href={MyCV} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Lets talk
      </a>
    </div>
  )
}

export default MyCv
