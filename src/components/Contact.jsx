import '../assets/styles/contact.css'
import { FiMail } from 'react-icons/fi'
import { BsMessenger } from 'react-icons/bs'
import { SiWhatsapp } from 'react-icons/si'
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const options = [
  {
    icon: <FiMail className='contact-option-icon' />,
    title: 'E-mail',
    value: 'ilyaig8@gmail.com',
    link: 'mailto:ilyaig8@gmail.com',
    cta: 'Send me a message',
  },
  {
    icon: <BsMessenger className='contact-option-icon' />,
    title: 'Messenger',
    value: 'ilya.ig',
    link: 'https://m.me/ilya.ig',
    cta: 'Send me a message',
  },
  {
    icon: <SiWhatsapp className='contact-option-icon' />,
    title: 'WhatsApp',
    value: '+972 54-636-1555',
    link: 'https://api.whatsapp.com/send?phone=972546361555',
    cta: 'Send me a message',
  },
]

const Contact = () => {
  const form = useRef()
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_t0ebfcd',
      'template_1tf6bbp',
      form.current,
      '7TeKYoFFd54xDjDQz'
    )
    e.target.reset()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id='contact'>
      <h5 className='reveal'>Get In Touch</h5>
      <h2 className='reveal'>Let's Build Something</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          {options.map(({ icon, title, value, link, cta }) => (
            <article className='contact-option reveal' key={title}>
              {icon}
              <h4>{title}</h4>
              <small>{value}</small>
              <a href={link} target='_blank' rel='noreferrer'>
                {cta} →
              </a>
            </article>
          ))}
        </div>

        <form ref={form} className='contact-form reveal' onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your E-mail' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your message...'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
