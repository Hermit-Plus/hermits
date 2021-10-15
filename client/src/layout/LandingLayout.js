import React from 'react';
import LandingNav from '../components/landingNav';

const LandingLayout = ({ children }) => {
  return (
    <>
      <LandingNav />
      {children}
    </>
  );
};

export default LandingLayout;
