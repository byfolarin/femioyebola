import React from 'react'

const FeaturedProjects = () => {
  return (
    <div className='mx-16 font-interTight py-12 bg-white'>
        <div>
              <h2 className='text-3xl py-6'>Featured Projects</h2>  
        </div>


        <div className='grid grid-cols-3 gap-2'>
               <div className='bg-slate-300 h-[450px] rounded'></div>
               <div className='bg-slate-300 h-[450px] rounded '></div>
               <div className='bg-slate-300 h-[450px] rounded '></div>
        </div>


        <div className='flex justify-end py-4 text-xl'>
            All Works
        </div>
     
    </div>
  )
}

export default FeaturedProjects
