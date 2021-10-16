import React from 'react';
import { Link } from 'react-router-dom';
import bendLogo from '../../images/HermitPlusBend.png';
import bdubVideo from '../../images/bDouble0S8E1thumb.webp';

import styled from 'styled-components';
import { device } from '../../responsive';

const LandingHero = () => {
  return (
    <>
      <Hero className='mobile-hero desktop-hero'>
        <HeroOverlay></HeroOverlay>
        <LogoWrapper>
          <HeroLogo src={bendLogo} alt='Hermit Craft' />
        </LogoWrapper>
      </Hero>
    </>
  );
};

export default LandingHero;

const Hero = styled.section`
  background: url('/images/minecraft-fullbg.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 720px;

  @media ${device.desktop} {
    height: 115vh;
  }
`;

const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(
    15deg,
    var(--light-blue) 10%,
    rgba(255, 255, 255, 0)
  );

  @media ${device.desktop} {
    background: linear-gradient(
      15deg,
      var(--light-blue) 30%,
      rgba(255, 255, 255, 0)
    );
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 80px;
`;

const HeroLogo = styled.img`
  margin-top: -110vh; //!should this be a percentage?
  max-width: 702px;

  @media ${device.desktop} {
    /* margin-top: -1150px; */
    width: 100%;
  }

  @media ${device.laptopL} {
    /* margin-top: -75em; */
  }

  @media ${device.laptop} {
    width: 502px;
  }

  @media ${device.tablet} {
    width: 465px;
  }

  @media ${device.mobileL} {
    /* margin-top: -55em; */
    width: 318px;
  }
`;
