import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-interTight w-full flex items-center justify-between lg:pr-[248px] lg:pt-6 py-4 lg:py-4 px-2 lg:px-24 text-white bg-black sticky top-0 z-50'>
      <div className='whitespace-nowrap'>
        <Link to="/" className='font-bold text-3xl text-nowrap'>Femi Oyebola</Link>
      </div>

      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className={`lg:w-[348px] ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className='lg:grid hidden lg:grid-cols-4 gap-11'>
          <Link to="/about">About</Link>
          <Link to="/works">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/thoughts">Thoughts</Link>
        </div>
      </div>

      {isOpen && (
        <div className='lg:hidden flex flex-col items-start absolute top-16 left-0 w-full bg-black text-white'>
          <Link to="/about" className='py-2 px-4'>About</Link>
          <Link to="/works" className='py-2 px-4'>Projects</Link>
          <Link to="/contact" className='py-2 px-4'>Contact</Link>
          <Link to="/thoughts" className='py-2 px-4'>Thoughts</Link>
        </div>
      )}
    </div>
  );
}

export default Navigation;