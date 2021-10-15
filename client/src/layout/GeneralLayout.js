import React from 'react';
import Navbar from '../components/navbar';

const LandingLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default LandingLayout;
