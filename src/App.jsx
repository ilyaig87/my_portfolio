import './App.css'

import {
  About,
  AiEdge,
  Contact,
  Experience,
  Portfolio,
  Header,
  Nav,
  Footer,
  JobExperience,
  Education,
} from './components/index.js'
import Effects from './components/Effects'
import Preloader from './components/Preloader'
import CommandPalette from './components/CommandPalette'
import TechMarquee from './components/TechMarquee'
import useScrollReveal from './hooks/useScrollReveal'

const App = () => {
  useScrollReveal()

  return (
    <div className='app'>
      <Preloader />
      <Effects />
      <CommandPalette />
      <Header />
      <TechMarquee />
      <Nav />
      <main>
        <About />
        <AiEdge />
        <Experience />
        <Portfolio />
        <JobExperience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
