import React from 'react'
import Navigation from './Nav/Navigation'

const LandingPage = () => {
  return (

        <div className='bg-black'>

        <div>
         <Navigation />
        </div>
      
        <div className='w-[346px] border border-red-300 mb-[64px] flex justify-end'>
            <div className='w-full h-[346px]  bg-white'></div>
        </div>

    </div>
  )
}

export default LandingPage
