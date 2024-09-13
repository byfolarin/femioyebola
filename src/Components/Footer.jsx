import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white font-interTight px-2 lg:px-24'>


    <div className='lg:w-[60%] py-8 '>

            <h2 className='text-3xl'>
                Let’s make something together
                    hello@femiOyebola.com
            </h2>

    </div>

    <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-4 justify-between py-8'>

              <div>
                <ul>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>       
                </ul>
              </div>

              <div>
                <ul>
                  <li><a href="/works">Works</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>     
                  <li><a href="/thoughts">Thoughts</a></li>    
                </ul>
              </div>




     
              <div>
                <ul>
                  <li>hello@femiOyebola</li>
                  <li>+44 7700 900474</li>
                  <li>Contact</li>     
                  <li>Thoughts</li>    
                </ul>
              </div>

              {/* <div className='text-nowrap'>
                Femi Oyebola 2024
              </div> */}

            </div>
    

    </div>
  )
}

export default Footer
