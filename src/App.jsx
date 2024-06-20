import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Hero from './sections/hero/hero'
import About from './sections/about/about'
import Project from './sections/project/project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
    </>
  )
}

export default App
