import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Hero from './components/hero/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
