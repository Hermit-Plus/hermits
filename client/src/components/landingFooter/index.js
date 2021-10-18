import React from 'react';
import hermitLogo from '../../images/HermitPlusLogo.png';

import styled from 'styled-components';
import { device } from '../../responsive';

const Footer = () => {
  return (
    <>
      <LandingFooter>
        <div>
          <FooterLogo src={hermitLogo} alt='Hermit Craft Logo' />
        </div>
        <InfoFooter>
          <ul>
            <FooterList>
              <h2>Help</h2>
            </FooterList>
            <FooterList>
              <h2>About</h2>
            </FooterList>
            <FooterList>
              <h2>Donate</h2>
            </FooterList>
          </ul>
          <ul>
            <FooterList>
              <h2>Terms of Service</h2>
            </FooterList>
            <FooterList>
              <h2>Get Involved</h2>
            </FooterList>
            <FooterList>
              <h2>&copy; copyright 2021</h2>
            </FooterList>
          </ul>
        </InfoFooter>
      </LandingFooter>
    </>
  );
};

export default Footer;

const LandingFooter = styled.footer`
  background-color: var(--light-green);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2em 0;

  @media ${device.mobileL} {
    flex-direction: column;
    padding: 0 0 1em 0;
  }
`;

const FooterLogo = styled.img`
  width: 544px;
  padding: 0.5rem;

  @media ${device.tablet} {
    width: 420px;
  }

  @media ${device.mobileL} {
    margin-top: 2em;
    margin-bottom: 1em;
    width: 320px;
  }
`;

const InfoFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FooterList = styled.li`
  list-style: none;
  margin: 5px;
  color: var(--text-main);
`;
