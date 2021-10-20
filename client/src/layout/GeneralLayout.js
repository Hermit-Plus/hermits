import React from 'react';
import Navbar from '../components/navbar';

const GeneralLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default GeneralLayout;
