import React from 'react'
import Section from './Section'
import House1 from '../../../src/assets/images/House1.jpeg'
import House2 from '../../../src/assets/images/House2.jpeg'
import House3 from '../../../src/assets/images/House3.jpeg'
import House4 from '../../../src/assets/images/House4.jpeg'
import House5 from '../../../src/assets/images/House5.jpeg'

const Works = () => {
  return (
    <div className='mx-2 lg:mx-16 font-interTight'>
      <Section className="min-h-screen text-black">
        <div>
          <h2 className='text-3xl mt-32 py-6'>All Works</h2>  
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <ImageWithOverlay src={House1} projectName="Project 1" />
          <ImageWithOverlay src={House2} projectName="Project 2" />
          <ImageWithOverlay src={House3} projectName="Project 3" className="lg:col-span-2" />
          <ImageWithOverlay src={House4} projectName="Project 4" />
          <ImageWithOverlay src={House5} projectName="Project 5" />
        </div>

       
      </Section>
    </div>
  )
}

const ImageWithOverlay = ({ src, projectName, className = '' }) => (
  <div className={`bg-slate-300 h-[400px] rounded overflow-hidden relative group ${className}`}>
    <img src={src} alt={projectName} className='w-full h-full object-cover' />
    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300'></div>
    <div className='absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      {projectName}
    </div>
  </div>
)

export default Works