import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Hero from './sections/hero/hero'
import About from './sections/about/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App
