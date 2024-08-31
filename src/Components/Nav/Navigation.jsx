import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='font-interTight w-full flex items-end justify-between pr-[248px] pt-6 py-4 px-24 text-white'>
      <div>
        <Link to="/" className='font-bold text-3xl'>femiOyebola.</Link>
      </div>

      <div className='w-[348px]'>
        <div className='flex gap-11'>
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