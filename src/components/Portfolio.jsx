import '../assets/styles/portfolio.css'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import YOUTUSE from '../../src/assets/images/youtuse.png'
import IGAMES from '../../src/assets/images/igames.png'
import CRITIC from '../../src/assets/images/critic.png'
import WORKERR from '../../src/assets/images/workerr.png'

const data = [
  {
    id: 1,
    image: WORKERR,
    title: 'Workerr',
    description:
      "My bootcamp's full-stack final project — a Fiverr-style marketplace built with React, Express & Node.js on a MongoDB database.",
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/ilyaig87/worker',
    demo: 'https://react-reviews-vus7.onrender.com/#/',
    featured: true,
  },
  {
    id: 2,
    image: CRITIC,
    title: 'Critic',
    description:
      'An epic movie & TV series discovery app with rich browsing, search and detailed pages.',
    tags: ['React', 'API', 'CSS'],
    github: 'https://github.com/ilyaig87/Critic',
    demo: 'https://critics.netlify.app',
  },
  {
    id: 3,
    image: YOUTUSE,
    title: 'YouTuse',
    description:
      'A YouTube clone with video search, playback and a clean, responsive interface.',
    tags: ['React', 'API'],
    github: 'https://github.com/ilyaig87/yotube_clone',
    demo: 'https://youtuse.netlify.app/',
  },
  {
    id: 4,
    image: IGAMES,
    title: 'i-Games',
    description:
      'A hub of six handcrafted browser games — Memory, Tic-Tac-Toe & Minesweeper, plus Chess, Checkers & Backgammon against a real AI opponent.',
    tags: ['JavaScript', 'Games', 'AI'],
    github: 'https://github.com/ilyaig87/Memory-Game',
    demo: 'https://memory-game-tawny-eta.vercel.app/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='reveal'>My Recent Work</h5>
      <h2 className='reveal'>Featured Projects</h2>

      <div className='container portfolio-container'>
        {data.map(({ id, image, title, description, tags, github, demo, featured }) => (
          <article
            className={`portfolio-item reveal ${featured ? 'featured' : ''}`}
            key={id}
          >
            <div className='portfolio-img-wrap'>
              <img src={image} alt={title} className='portfolio-img' />
              <div className='portfolio-overlay'>
                <a href={github} target='_blank' rel='noreferrer' aria-label='GitHub'>
                  <FiGithub />
                </a>
                <a href={demo} target='_blank' rel='noreferrer' aria-label='Live demo'>
                  <FiExternalLink />
                </a>
              </div>
              {featured && <span className='portfolio-badge'>⭐ Featured</span>}
            </div>

            <div className='portfolio-body'>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className='portfolio-tags'>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className='portfolio-links'>
                <a href={github} target='_blank' rel='noreferrer' className='btn'>
                  <FiGithub /> Code
                </a>
                <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
