import React from 'react'
import Navigation from './Nav/Navigation'

const LandingPage = () => {
  return (

        <div className='bg-black pb-[24px] font-interTight'>

        

        <div>
         <Navigation />
        </div>

        <div className='flex  justify-end pr-[235px]'>

            <div className='w-[370px]'>
      
                <div className='w-[366px] py-[16px]'>
                    <div className='w-full h-[266px] rounded flex justify-end bg-[#DCE0E6]'></div>
                </div>

                <div>
                    <h2 className='font-interTight text-3xl text-white'>
                        Architect from Lagos, Nigeria.
                    </h2>
                </div>

                <div>
                    <p className='text-gray-400 pt-2'>Elevate your brand in the modern world with my expertise in digital 
                        design, strategy, and technology.</p>
                </div>

                <button className='text-white mt-2 mb-4 text-sm rounded bg-[#1A1A1A] px-2  py-2'>
                    Request Project
                </button>


            </div>



        </div>

    </div>
  )
}

export default LandingPage
