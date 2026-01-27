
import { motion,  } from 'framer-motion';

const Details = () => {
  return (
    <div className='flex flex-col bg-primary-black text-primary-white min-h-screen justify-center items-center'>
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
                 We design digital experiences that connect brands with people. From strategy and design to performance-driven campaigns, we help businesses grow in a digital-first world — backed by over 25 years of industry expertise.
          </motion.p>
    </div>
    </div>
  )
}

export default Details