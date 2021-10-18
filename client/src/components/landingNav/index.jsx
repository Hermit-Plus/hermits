import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { device } from '../../responsive';

import logo from '../../images/HermitPlusLogo.png';

const LandingNav = () => {
  return (
    <Header>
      <LogoBox>
        <Logo src={logo} alt='hermit craft' />
      </LogoBox>
      <SignLink to='/app'>
        <SignInBox>
          <h3>Sign Up</h3>
        </SignInBox>
      </SignLink>
    </Header>
  );
};

export default LandingNav;

const Header = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-dark-color);
  padding: 0 1em;
  width: 100%;
  height: 70px;

  @media ${device.mobileL} {
    justify-content: center;
    height: 50px;
  }
`;

const LogoBox = styled.div`
  display: block;

  @media ${device.mobileL} {
    display: none;
  }
`;

const Logo = styled.img`
  height: 38px;
  margin-left: 3em;

  @media ${device.mobileL} {
    display: none;
    opacity: 0;
    width: 0;
  }
`;

const SignInBox = styled.div`
  background-color: var(--light-green);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 300px;
  height: 50px;

  @media ${device.laptopL} {
    margin-right: 0;
    height: 44px;
  }
`;

const SignLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--text-main);
  font-size: 22px;
  margin-right: 3em;

  @media ${device.mobileL} {
    margin-right: 0;
  }
`;
