import React from 'react'
import Section from './Section'

const Works = () => {
  return (
    <div className='mx-16 font-interTight'>
      <Section navColor="text-black" className="min-h-screen">
        <div>
          <h2 className='text-3xl mt-32 py-6'>All Works</h2>  
        </div>

        <div className='grid grid-cols-2 gap-4 '>
          <div className='bg-slate-300 h-[400px] rounded'></div>
          <div className='bg-slate-300 h-[400px] rounded '></div>
          <div className='bg-slate-300 col-span-2 h-[450px] rounded '></div>
          <div className='bg-slate-300 h-[400px] rounded '></div>
          <div className='bg-slate-300 h-[400px] rounded '></div>
        </div>

        <div className='flex justify-end py-4 text-xl'>
          View All
        </div>
      </Section>
    </div>
  )
}

export default Works