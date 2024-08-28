import React from 'react'

const BlogSec = () => {
  return (
    <div className='mx-24 font-interTight'>
        <div>
              <h2 className='text-3xl py-6'>Blog Section</h2>  
        </div>


        <div className='grid grid-cols-3 gap-4 '>
               <div className='bg-slate-300 h-[400px] rounded'></div>
               <div className='bg-slate-300 h-[350px] rounded '></div>
               <div className='bg-slate-300 h-[450px] rounded '></div>
        </div>


        <div className='flex justify-end py-4 text-xl'>
            View All
        </div>
     
    </div>
  )
}

export default BlogSec
