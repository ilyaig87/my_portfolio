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
import ThemeToggle from './components/ThemeToggle'
import useScrollReveal from './hooks/useScrollReveal'
import useScrambleHeadings from './hooks/useScrambleHeadings'

const App = () => {
  useScrollReveal()
  useScrambleHeadings()

  return (
    <div className='app'>
      <Preloader />
      <Effects />
      <ThemeToggle />
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
