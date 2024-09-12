import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black text-white py-32 px-2 lg:px-24 font-interTight'>

      <div>
       <h1 className='text-[64px]'>Let's talk</h1> 
      </div>


      <div className='lg:w-[50%] '>

        <p className='py-8'>
        Whether it's a conversation about all things design or 
        thinking about a potential project or opportunity, get in touch.
        </p>

        <div className='grid grid-row-2 gap-4' >
          <div className='flex flex-col lg:flex-row gap-4'>
              <input type="text" name="" placeholder='Name' id="" className='bg-[#2e2e2e] lg:w-[50%] rounded py-6 px-2 text-white' />
              <input type="text" name="" placeholder='Email' id=""  className='bg-[#2e2e2e] py-6 px-2 rounded lg:w-[50%] text-white' />
          </div>

          <div>
              <input type="text" name="" placeholder='Message' id=""  className='bg-[#2e2e2e] px-2 rounded pb-32  w-full text-white' />
          </div>

        </div>


      </div>

      <div>
      <button className='w-full rounded lg:w-[50%] mt-4 py-4 px-[auto] bg-white text-black'>Send</button>
      </div>


    </div>
  )
}

export default Contact
