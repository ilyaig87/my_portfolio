import '../assets/styles/education.css'
import CA from '../assets/images/ca.png'
import SHENKAR from '../assets/images/shenkar.png'

const Education = () => {
  const data = [
    {
      id: 1,
      title: 'CODING ACADEMY ',
      profession: 'FullStack Web Developer',
      date: 'July 2O22 - November 2O22',
      text: `4 months full time course (8:30 AM - 18:30 PM), covering a wide
  variety of programming topics such as data structures, networking,
  OOP as well as hands on experience with projects in
  Javascript,HTML, CSS React JS, Vue and Node.`,
      img: CA,
    },
    {
      id: 2,
      title: 'SHENKAR COLLEGE',
      profession: 'Practical Engineer',
      date: '2Ol6-2Ol9',
      text: `Finished a practical engineer.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
      perferendis corrupti repellat nisi hic voluptate? Deserunt saepe
      non debitis porro.`,
      img: SHENKAR,
    },
  ]

  return (
    <section id='education'>
      <h5>What I Learned</h5>
      <h2>My Education</h2>

      <div className='container education-container '>
        <article className='education grid'>
          {data.map(({ id, title, date, text, img, profession }) => {
            return (
              <section className='education-section' key={id}>
                <div className='education-complex grid'>
                  <div className='education-img flex'>
                    <img src={img} alt='' />
                  </div>
                  <div className='education-prof flex'>
                    <h3>{title}</h3>
                    <h5>{profession}</h5>
                    <small>{date}</small>
                  </div>
                </div>

                <div className='education-about'>
                  <p>{text}</p>
                </div>
              </section>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Education
