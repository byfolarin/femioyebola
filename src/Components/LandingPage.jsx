import React from 'react'
import Navigation from './Nav/Navigation'

const LandingPage = () => {
  return (

        <div className='bg-black pb-[248px]'>

        

        <div>
         <Navigation />
        </div>

        <div className='flex justify-end'>
      
                <div className='w-[346px] border border-red-300 py-[64px]'>
                    <div className='w-full h-[346px] flex justify-end bg-white'></div>
                </div>

        </div>

    </div>
  )
}

export default LandingPage
