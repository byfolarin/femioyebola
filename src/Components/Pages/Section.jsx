import React from 'react';

const Section = ({ children, className }) => {
  return (
    <div data-section className={className}>
      {children}
    </div>
  );
};

export default Section;