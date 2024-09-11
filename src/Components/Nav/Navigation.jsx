import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='font-interTight w-full flex items-end justify-between pr-[248px] pt-6 py-4 px-24 text-white bg-black sticky top-0 z-50'>
      <div>
        <Link to="/" className='font-bold text-3xl text-nowrap'>Femi Oyebola</Link>
      </div>

      <div className='w-[348px]'>
        <div className='lg:grid hidden lg:grid-cols-4 gap-11'>
          <Link to="/about">About</Link>
          <Link to="/works">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/thoughts">Thoughts</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation