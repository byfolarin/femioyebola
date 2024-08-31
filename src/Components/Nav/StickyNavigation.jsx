import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StickyNavigation = () => {
  const [navBackground, setNavBackground] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground('bg-white text-black');
      } else {
        setNavBackground('bg-transparent text-white');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className='font-interTight w-full flex items-end justify-between pr-[248px] pt-6 py-4 px-24'>
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
    </nav>
  );
};

export default StickyNavigation;