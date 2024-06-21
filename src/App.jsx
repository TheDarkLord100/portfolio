import Navbar from './components/navbar/navbar'
import './App.css'
import Hero from './sections/hero/hero'
import About from './sections/about/about'
import Project from './sections/project/project'
import Contact from './sections/contact/contact'
import Footer from './components/footer/footer'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
