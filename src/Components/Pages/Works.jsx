import React from 'react'
import Section from './Section'
import House1 from '../../../src/assets/images/House1.jpeg'

const Works = () => {
  return (
    <div className='mx-16 font-interTight'>
          <Section className="min-h-screen text-black">      <div>
          <h2 className='text-3xl mt-32 py-6'>All Works</h2>  
        </div>

        <div className='grid grid-cols-2 gap-4 '>
          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
              <img src={House1} alt="" className='w-full h-full object-cover'/>
            </div>


           <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
              <img src={House1} alt="" className='w-full h-full object-cover'/>
            </div>


          <div className='bg-slate-300 h-[400px] col-span-2 rounded overflow-hidden'>
              <img src={House1} alt="" className='w-full h-full object-cover'/>
            </div>


          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
              <img src={House1} alt="" className='w-full h-full object-cover'/>
            </div>


          <div className='bg-slate-300 h-[400px] rounded overflow-hidden'>
              <img src={House1} alt="" className='w-full h-full object-cover'/>
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