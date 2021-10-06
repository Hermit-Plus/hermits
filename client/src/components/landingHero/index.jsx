import React from 'react';
import { Link } from 'react-router-dom';
import bendLogo from '../../images/HermitPlusBend.png';
import bdubVideo from '../../images/bDouble0S8E1thumb.webp';

const LandingHero = () => {
  return (
    <>
      <section className='mobile-hero desktop-hero'>
        <div className='hero-overlay'></div>
        <div className='logo-wrapper'>
          <img src={bendLogo} alt='Hermit Craft' />
          <div className='video-wrapper'>
            <Link>
              <img
                className='border'
                src={bdubVideo}
                alt='B dubs season eight episode one'
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
