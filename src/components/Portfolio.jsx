import '../assets/styles/portfolio.css'
import YOUTUSE from '../../src/assets/images/youtuse.png'
import IGAMES from '../../src/assets/images/cover.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container grid'>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={YOUTUSE} alt='YOUTUSE' className='portfolio-img' />
            <h3>This is a youtube clone! </h3>
            <div className='buttons-portfolio flex'>
              <a
                href='https://github.com/ilyaig87/yotube_clone'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://youtuse.netlify.app/'
                target='_blank'
                className='btn btn-primary'
              >
                Check it here!
              </a>
            </div>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IGAMES} alt='IGAMES' className='portfolio-img' />
            <h3>This is a game site! </h3>
            <div className='buttons-portfolio flex'>
              <a
                href='https://github.com/ilyaig87/Memory-Game'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://i-games.netlify.app/'
                target='_blank'
                className='btn btn-primary'
              >
                Check it here!
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
