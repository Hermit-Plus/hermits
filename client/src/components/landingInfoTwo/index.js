import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { device } from '../../responsive';

const LandingInfoTwo = () => {
  return (
    <>
      <InfoTwo>
        <SignLink to='/hermit-plus'>
          <SignInBox>
            <h3>Sign Up</h3>
          </SignInBox>
        </SignLink>
        <InfoTitle>
          Think <span>Netflix</span> for Hermits
        </InfoTitle>
        <InfoText>Enjoy the hermits like you never have before!</InfoText>
      </InfoTwo>
    </>
  );
};

export default LandingInfoTwo;

const InfoTwo = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 900px;

  @media ${device.mobileL} {
    margin-top: 550px;
  }
  /* 
  @media ${device.tablet} {
    margin-top: 550px;
  } */

  @media ${device.laptop} {
    margin-top: 525px;
  }
`;

const InfoTitle = styled.h1`
  font-size: 68px;
  text-align: center;
  margin-top: 1em;

  span {
    color: var(--red);
  }

  @media ${device.mobileL} {
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    padding: 10px;
    margin: 0.5em 0;
  }
`;

const InfoText = styled.p`
  font-family: 'Teko', sans-serif;
  font-size: 48px;
  text-align: center;
  padding: 0.8rem;

  @media ${device.mobileL} {
    font-size: 44px;
    line-height: 44px;
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
`;
