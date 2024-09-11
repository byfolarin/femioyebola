import React from 'react'

const Thoughts = () => {
  return (
    <div className='mt-24 font-interTight mx-2 lg:mx-16'>


      <div className='w-[100%] flex justify-end py-12'>
          <h1 className='text-5xl lg:w-[60%] '>
            My thoughts on Architecture, 
            technology and events.
          </h1>
      </div>

      <div>
      
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 '>
                    <div className='bg-slate-300 h-[400px] rounded'></div>
                    <div className='bg-slate-300 h-[350px] rounded '></div>
                    <div className='bg-slate-300 h-[450px] rounded '></div>
              </div>


              <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 '>
                    <div className='bg-slate-300 h-[400px] rounded'></div>
                    <div className='bg-slate-300 h-[350px] rounded '></div>
                    <div className='bg-slate-300 h-[450px] rounded '></div>
              </div>

        </div>



    </div>
  )
}

export default Thoughts
