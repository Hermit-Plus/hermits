import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/HermitPlusLogo.png';

const LandingNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='hermit craft' />
      </div>
      <div className='signup-button'>
        <Link>
          <h3>Sign Up</h3>
        </Link>
      </div>
    </header>
  );
};

export default LandingNav;
