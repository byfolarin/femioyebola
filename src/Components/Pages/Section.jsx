import React from 'react';

const Section = ({ children, navColor, className }) => {
  return (
    <div data-section data-nav-color={navColor} className={className}>
      {children}
    </div>
  );
};

export default Section;