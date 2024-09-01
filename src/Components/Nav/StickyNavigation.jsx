import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function getRGB(c) {
  return parseInt(c, 16) || c;
}

function getsRGB(c) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
}

function getLuminance(hexColor) {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  );
}

function getContrast(f, b) {
  const L1 = getLuminance(f);
  const L2 = getLuminance(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function getTextColor(bgColor) {
  const whiteContrast = getContrast(bgColor, '#ffffff');
  const blackContrast = getContrast(bgColor, '#000000');

  return whiteContrast > blackContrast ? 'text-white' : 'text-black';
}

const StickyNavigation = ({ initialColor = 'text-black' }) => {
  const [textColor, setTextColor] = useState(initialColor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            const hex = '#' + ((1 << 24) + (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2])).toString(16).slice(1);
            setTextColor(getTextColor(hex));
          }
        });
      },
      { threshold: 0.1 }
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