import React from 'react'
import House1 from '../../src/assets/images/House1.jpeg'
import House2 from '../../src/assets/images/House2.jpeg'
import House3 from '../../src/assets/images/House3.jpeg'

const FeaturedProjects = () => {
  return (
    <div className='mx-16 font-interTight py-12 bg-white relative z-[2]'>
      <div>
        <h2 className='text-3xl py-6'>Projects</h2>  
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <ImageWithOverlay src={House1} projectName="Project 1" />
        <ImageWithOverlay src={House2} projectName="Project 2" />
        <ImageWithOverlay src={House3} projectName="Project 3" />
      </div>

      <div className='flex justify-end py-4 text-xl'>
        All Works
      </div>
    </div>
  )
}

const ImageWithOverlay = ({ src, projectName }) => (
  <div className='relative group rounded overflow-hidden'>
    <img src={src} alt={projectName} className='w-full h-full object-cover' />
    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-300'></div>
    <div className='absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      {projectName}
    </div>
  </div>
)

export default FeaturedProjects