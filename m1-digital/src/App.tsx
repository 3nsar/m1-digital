import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Details from './components/Details'
import Footer from './components/Footer'
import Navbar from './components/Navbar'




function App() {

  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Details/>
      <Footer/>
    </>
  )
}

export default App
