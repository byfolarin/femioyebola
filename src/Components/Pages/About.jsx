import React from 'react'
import House1 from '../../assets/images/House1.jpeg'

const About = () => {
  return (
    <div className="bg-black pt-32 px-2 lg:px-16 text-white min-h-screen flex flex-col font-interTight">
      <div className="max-w-4xl">
        <h1 className="text-4xl lg:w-[70%] leading-tight mb-8">
          I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          I am Femi Oyebola, a Digital Designer & Art Director based in Toronto, Canada. With more than 10 years of experience in digital design and print for national and international clients such as Balea, Sensa, Apex Films and Filippe Monet. Currently working at Basic as a Digital Art Director.
        </p>
      </div>


      <div className='pt-5 w-full h-[428px]'>
        <img src={House1} alt="" className='w-full rounded h-full object-cover'/>
      </div>
    </div>
  )
}

export default About