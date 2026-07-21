import '../assets/styles/portfolio.css'
import { FiGithub, FiExternalLink, FiCheckCircle, FiStar } from 'react-icons/fi'
import YOUTUSE from '../../src/assets/images/youtuse.png'
import IGAMES from '../../src/assets/images/igames.png'
import CRITIC from '../../src/assets/images/critic.png'
import INDICATOR from '../../src/assets/images/indicator.png'

const data = [
  {
    id: 1,
    image: INDICATOR,
    title: 'Indicator',
    kicker: 'Stock-Market E-Learning Platform',
    description:
      'A production e-learning platform for stock-market courses, built end-to-end with Next.js, TypeScript & PostgreSQL — serving paying customers in production.',
    highlights: [
      'Card payments with automated invoicing, transactional emails and full authentication (Clerk)',
      'Student area with lesson player and progress tracking',
      'Custom CMS built from scratch for live, in-place content editing, plus an admin panel — deployed on Vercel',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Clerk', 'Vercel'],
    demo: 'https://indicator.co.il/',
    displayUrl: 'indicator.co.il',
    featured: true,
  },
  {
    id: 2,
    image: CRITIC,
    title: 'Critic',
    kicker: 'Movie & TV Discovery',
    description:
      'A responsive movie and TV discovery application built with React and TypeScript — 199 hand-picked titles from around the world.',
    highlights: [
      'Real-time search with debouncing and smart rating filters',
      'Pagination and integration with public REST APIs',
      'Sleek dark UI with detailed pages for every title',
    ],
    tags: ['React', 'TypeScript', 'REST API'],
    github: 'https://github.com/ilyaig87/Critic',
    demo: 'https://critics.netlify.app',
    displayUrl: 'critic.app',
  },
  {
    id: 3,
    image: YOUTUSE,
    title: 'YouTuse',
    kicker: 'Video Platform Clone',
    description:
      'A YouTube clone with video search, playback and a clean, responsive interface powered by real API data.',
    highlights: [
      'Live video search and in-app playback',
      'Category sidebar and channel browsing',
      'Fully responsive, mobile-first layout',
    ],
    tags: ['React', 'API'],
    github: 'https://github.com/ilyaig87/yotube_clone',
    demo: 'https://youtuse.netlify.app/',
    displayUrl: 'youtuse.app',
  },
  {
    id: 4,
    image: IGAMES,
    title: 'i-Games',
    kicker: 'Browser Gaming Hub',
    description:
      'A hub of six handcrafted browser games — Memory, Tic-Tac-Toe & Minesweeper, plus Chess, Checkers & Backgammon against a real AI opponent.',
    highlights: [
      'Six complete games in one place — free, no sign-up',
      'Three games powered by a real, thinking AI engine',
      'Built from scratch in vanilla JavaScript',
    ],
    tags: ['JavaScript', 'Games', 'AI'],
    github: 'https://github.com/ilyaig87/Memory-Game',
    demo: 'https://memory-game-tawny-eta.vercel.app/',
    displayUrl: 'i-games.play',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='reveal'>My Recent Work</h5>
      <h2 className='reveal'>Featured Projects</h2>

      <div className='container case-studies'>
        {data.map(
          (
            {
              id,
              image,
              title,
              kicker,
              description,
              highlights,
              tags,
              github,
              demo,
              displayUrl,
              featured,
            },
            i
          ) => (
            <article
              className={`case-study reveal ${i % 2 === 1 ? 'reverse' : ''}`}
              key={id}
            >
              <div className='case-media'>
                <div className='browser-frame' data-tilt>
                  <div className='browser-bar'>
                    <span className='browser-dots'>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span className='browser-url'>{displayUrl}</span>
                  </div>
                  <a
                    href={demo}
                    target='_blank'
                    rel='noreferrer'
                    className='browser-viewport'
                    aria-label={`Open ${title} live demo`}
                  >
                    <img src={image} alt={title} />
                    <span className='viewport-cta'>
                      <FiExternalLink /> Visit live site
                    </span>
                  </a>
                  {featured && (
                    <span className='case-badge'>
                      <FiStar /> Featured
                    </span>
                  )}
                </div>
              </div>

              <div className='case-content'>
                <span className='case-number'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='case-kicker'>{kicker}</span>
                <h3>{title}</h3>
                <p>{description}</p>

                <ul className='case-highlights'>
                  {highlights.map((point, j) => (
                    <li key={j}>
                      <FiCheckCircle />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className='portfolio-tags'>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className='portfolio-links'>
                  {github && (
                    <a
                      href={github}
                      target='_blank'
                      rel='noreferrer'
                      className='btn'
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  <a
                    href={demo}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-primary'
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  )
}

export default Portfolio
