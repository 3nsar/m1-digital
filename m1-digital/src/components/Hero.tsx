import React from 'react'
import lava from '../videos/lava.mp4'

const Hero = () => {
  return (
    <div className="relative  text-primary-white min-h-screen overflow-hidden">
        <div className='container '>
      <video
        autoPlay
        loop
        muted
        src={lava}
        className="absolute inset-0 z-10 w-full h-full object-cover"
      />
      <div className="relative z-40">
        <p>THINKING OUTSIDE THE BOX</p>
        <h1 className="text-5xl font-extrabold">DELIVERING BEYOND EXPECTATIONS.</h1>
        <p className="">
          Since 2012, we've been pushing the boundaries of what's possible in web
          design, development, and digital marketing.
        </p>
      </div>
      </div>

    </div>
  )
}

export default Hero
