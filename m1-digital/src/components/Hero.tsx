import React from 'react'
import lava from '../videos/lava.mp4'

const Hero = () => {
  return (
    <div className="relative min-h-screen text-primary-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        src={lava}
        className="absolute inset-0 z-10 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-40 min-h-screen flex items-center justify-center">
        <div className="container text-center flex flex-col items-center gap-6">

          <p className="uppercase tracking-widest">
            THINKING OUTSIDE THE BOX
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            DELIVERING BEYOND EXPECTATIONS.
          </h1>

          <p className="max-w-xl">
            Since 2012, we've been pushing the boundaries of what's possible in web
            design, development, and digital marketing.
          </p>

          <a
            href=""
            className="mt-4 inline-block border border-white px-8 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition"
          >
            Explore
          </a>

        </div>
      </div>

    </div>
  )
}

export default Hero
