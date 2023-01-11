import './App.css'

import {
  About,
  Contact,
  Experience,
  Portfolio,
  Header,
  Nav,
  Footer,
  Services,
} from './components/index.js'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Services />
      <Footer />
    </div>
  )
}

export default App
