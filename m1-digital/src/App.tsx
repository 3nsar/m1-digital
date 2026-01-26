import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Details from './components/Details'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/Card'



function App() {

  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Card/>
      <Details/>
      <Footer/>
    </>
  )
}

export default App
