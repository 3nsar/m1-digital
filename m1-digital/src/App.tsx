import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <About/>
    </>
  )
}

export default App
