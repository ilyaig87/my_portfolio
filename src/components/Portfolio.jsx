import '../assets/styles/portfolio.css'
import YOUTUSE from '../../src/assets/images/youtuse.png'
import IGAMES from '../../src/assets/images/cover.jpg'
import CRITIC from '../../src/assets/images/critic.png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: YOUTUSE,
      title: 'This is a youtube clone!',
      github: 'https://github.com/ilyaig87/yotube_clone',
      demo: 'https://youtuse.netlify.app/',
    },
    {
      id: 2,
      image: IGAMES,
      title: 'This is a game site!',
      github: 'https://github.com/ilyaig87/Memory-Game',
      demo: 'https://i-games.netlify.app/',
    },
    {
      id: 3,
      image: CRITIC,
      title: 'This is a epic movie and tv series site!',
      github: 'https://github.com/ilyaig87/Critic',
      demo: 'https://critics.netlify.app',
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container grid'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className='portfolio-item' key={id}>
              <div className='portfolio-item-image'>
                <img src={image} alt={image} className='portfolio-img' />
                <h3>{title}</h3>
                <div className='buttons-portfolio flex'>
                  <a href={github} target='_blank' className='btn'>
                    Github
                  </a>
                  <a href={demo} target='_blank' className='btn btn-primary'>
                    Check it here!
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
