import './App.css'

import {
  About,
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
import useScrollReveal from './hooks/useScrollReveal'

const App = () => {
  useScrollReveal()

  return (
    <div className='app'>
      <Effects />
      <Header />
      <Nav />
      <main>
        <About />
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
