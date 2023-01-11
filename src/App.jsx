import './App.scss'

import {
  About,
  Contact,
  Experience,
  Portfolio,
  Header,
  Nav,
  Footer,
} from './components/index.js'

const App = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
