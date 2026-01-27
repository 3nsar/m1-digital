
import { motion,  } from 'framer-motion';

const About = () => {
  return (
    <div className='flex flex-col  min-h-screen justify-center items-center'>
      <div className='text-center flex flex-col items-center'>
      
            <motion.h1
            className="text-3xl md:text-6xl font-extrabold"
            initial="hidden"
            whileInView="visible"
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


            <motion.p
            className="text-xl md:text-4xl font-light text-center max-w-7xl mt-5"
            initial="hidden"
            whileInView="visible"
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
Hand in hand with our clients, our agency delivers powerful marketing projects and implements high-performing advertising strategies. All of this is made possible by a dynamic team with over 25 years of experience.
          </motion.p>
    </div>
    </div>
  )
}

export default About