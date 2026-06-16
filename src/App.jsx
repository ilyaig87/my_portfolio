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
import useScrollReveal from './hooks/useScrollReveal'

const App = () => {
  useScrollReveal()

  return (
    <div className='app'>
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
