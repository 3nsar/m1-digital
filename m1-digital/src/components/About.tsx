import React from 'react'
import { motion, useInView } from 'framer-motion';

const About = () => {
  return (
    <div className='container flex flex-col'>
      <motion.h1
            className="text-5xl md:text-6xl font-extrabold"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            DELIVERING BEYOND EXPECTATIONS.
          </motion.h1>
      <p>Main dans la main avec nos clients, notre agence réalise des projets marketing puissants et met en œuvre des stratégies publicitaires performantes. Tout cela grâce à une équipe dynamique et riche d’une expérience de 25+ ans.</p>
    </div>
    
  )
}

export default About