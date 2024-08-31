import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StickyNavigation = () => {
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextColor(entry.target.dataset.navColor);
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${textColor}`}>
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