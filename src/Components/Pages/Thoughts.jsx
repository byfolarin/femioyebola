import React from 'react'

const Thoughts = () => {
  return (
    <div className='mt-24 font-interTight mx-16'>


      <div className='w-[100%] flex justify-end py-12'>
          <h1 className='text-5xl w-[60%] '>
            My thoughts on design, 
            technology and events.
          </h1>
      </div>

      <div>
      
            <div className='grid grid-cols-3 gap-4 py-6 '>
                    <div className='bg-slate-300 h-[400px] rounded'></div>
                    <div className='bg-slate-300 h-[350px] rounded '></div>
                    <div className='bg-slate-300 h-[450px] rounded '></div>
              </div>


              <div className='grid grid-cols-3 gap-4 py-6 '>
                    <div className='bg-slate-300 h-[400px] rounded'></div>
                    <div className='bg-slate-300 h-[350px] rounded '></div>
                    <div className='bg-slate-300 h-[450px] rounded '></div>
              </div>

        </div>



    </div>
  )
}

export default Thoughts
