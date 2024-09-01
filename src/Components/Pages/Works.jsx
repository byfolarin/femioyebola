import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Section from './Section'
import House1 from '../../../src/assets/images/House1.jpeg'
import House2 from '../../../src/assets/images/House2.jpeg'
import House3 from '../../../src/assets/images/House3.jpeg'
import House4 from '../../../src/assets/images/House4.jpeg'
import House5 from '../../../src/assets/images/House5.jpeg'

const ParallaxImage = ({ src, alt }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <motion.div className='h-full overflow-hidden'>
      <motion.img 
        src={src} 
        alt={alt} 
        className='w-full h-full object-cover'
        style={{ y }}
      />
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className='mx-16 font-interTight'>
      <Section className="min-h-screen text-black">
        <div>
          <h2 className='text-3xl mt-32 py-6'>All Works</h2>  
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
            <ParallaxImage src={House1} alt="House 1" />
          </div>

          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
            <ParallaxImage src={House2} alt="House 2" />
          </div>

          <div className='bg-slate-300 h-[400px] col-span-2 rounded overflow-hidden'>
            <ParallaxImage src={House3} alt="House 3" />
          </div>

          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
            <ParallaxImage src={House4} alt="House 4" />
          </div>

          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
            <ParallaxImage src={House5} alt="House 5" />
          </div>
        </div>

        <div className='flex justify-end py-4 text-xl'>
          View All
        </div>
      </Section>
    </div>
  )
}

export default Works