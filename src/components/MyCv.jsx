import React from 'react'
import MyCV from '../assets/downloads/Ilya Griss- CV.pdf'

const MyCv = () => {
  return (
    <div className='my-cv'>
      <a href={MyCV} download className='btn'>
        Download my CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Lets talk
      </a>
    </div>
  )
}

export default MyCv
