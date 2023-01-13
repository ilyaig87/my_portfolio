import '../assets/styles/education.css'
import { TbSchool } from 'react-icons/tb'

const Education = () => {
  return (
    <section id='education'>
      <h5></h5>
      <h2>My Education</h2>

      <div className='container education-container '>
        <article className='education grid'>
          <section className='education-section'>
            <TbSchool />
            <h3>CODING ACADEMY - FullStack Web Developer</h3>
            <small>July 2O22 - November 2O22</small>
            <p>
              4 months full time course (8:30 AM - 18:30 PM), covering a wide
              variety of programming topics such as data structures, networking,
              OOP as well as hands on experience with projects in
              Javascript,HTML, CSS React JS, Vue and Node.
            </p>
          </section>
          <section className='education-section'>
            <TbSchool />
            <h3>CODING ACADEMY - FullStack Web Developer</h3>
            <small>July 2O22 - November 2O22</small>
            <p>
              4 months full time course (8:30 AM - 18:30 PM), covering a wide
              variety of programming topics such as data structures, networking,
              OOP as well as hands on experience with projects in
              Javascript,HTML, CSS React JS, Vue and Node.
            </p>
          </section>
          <section className='education-section'>
            <TbSchool />
            <h3>CODING ACADEMY - FullStack Web Developer</h3>
            <small>July 2O22 - November 2O22</small>
            <p>
              4 months full time course (8:30 AM - 18:30 PM), covering a wide
              variety of programming topics such as data structures, networking,
              OOP as well as hands on experience with projects in
              Javascript,HTML, CSS React JS, Vue and Node.
            </p>
          </section>
        </article>
      </div>
    </section>
  )
}

export default Education
