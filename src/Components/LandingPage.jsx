import React from 'react'
import Navigation from './Nav/Navigation'
import MrFemi from '../assets/images/MrFemi.jpg'

const LandingPage = () => {
  return (

        <div className='bg-black pb-[24px] font-interTight'>

        


        <div className='flex justify-center  lg:justify-end px-2 lg:pr-[235px]'>

            <div className='w-full lg:w-[370px]'>
   
            <div className='w-full lg:w-[366px] py-[16px]'>
                <div className='w-full h-auto rounded flex justify-end bg-[#DEDEDE]'>
                    <img 
                        src={MrFemi} 
                        alt="Mr Femi Image in black and white that turns colored on hover" 
                        className='w-full object-contain rounded filter grayscale hover:filter-none transition-all duration-300' 
                    />
                </div>
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
