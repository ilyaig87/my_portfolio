import '../assets/styles/contact.css'
import { FiMail } from 'react-icons/fi'
import { BsMessenger } from 'react-icons/bs'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me!</h2>
    <div className='container contact-container grid'>
      <div className='contact-options flex'>
        <div className='contact-options-container grid'>
          <article className='contact-option'>
            <FiMail className='contact-option-icon' />
            <h4>E-mail</h4>
            <a href='mailto:ilyaig8@gmail.com' target='_blank'>
              Send me a message!
            </a>
          </article>
          <article className='contact-option'>
            <BsMessenger className='contact-option-icon' />
            <h4>Messenger</h4>
            <a href='https://m.me/ilya.ig' target='_blank'>
              Send me a message!
            </a>
          </article>
          <article className='contact-option'>
            <SiWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <a
              href='https://api.whatsapp.com/send?phone=9720546361555'
              target='_blank'
            >
              Send me a message!
            </a>
          </article>
        </div>
      </div>
      <form action='' className='flex'>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your E-mail' required />
        <textarea
          name='message'
          rows='7'
          placeholder='Your message...'
          required
        ></textarea>
        <button type='submit' className='btn btn-primary'>
          Send Message
        </button>
      </form>
    </div>
  </section>
)

export default Contact
