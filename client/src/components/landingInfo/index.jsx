import React from 'react';

import mumboCard from '../../images/mumboCard.png';
import gemCard from '../../images/GeminiTayCard.png';
import pearlCard from '../../images/pearlCard.png';
import bdubsCard from '../../images/bdubsCard.png';

import { device } from '../../responsive';
import styled from 'styled-components';

const LandingInfo = () => {
  return (
    <>
      <InfoSection>
        <div>
          <InfoTitle>Hermitcraft fans Rejoice!</InfoTitle>
          <InfoSubTitle>
            Get Info and stats on your favorite hermits.
          </InfoSubTitle>
        </div>
        <InfoCards>
          <InfoCardImg src={mumboCard} alt='mumbo jumbo information' />
          <InfoCardImg src={gemCard} alt='Gemini Tay information' />
          <InfoCardImg src={pearlCard} alt='Gemini Tay information' />
          <InfoCardImg src={bdubsCard} alt='Gemini Tay information' />
        </InfoCards>
      </InfoSection>
    </>
  );
};

export default LandingInfo;

const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2em;
  background: var(--light-blue);
`;

const InfoTitle = styled.h1`
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  margin: 1em 0;
  color: var(--light-yellow);
  text-shadow: 2px 2px 2px #000;

  @media ${device.mobileL} {
    font-size: 46px;
    line-height: 46px;
  }
`;

const InfoSubTitle = styled.h3`
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  padding: 0 0.5em;
  margin-bottom: 1.5em;
  color: var(--light-yellow);
  text-shadow: 2px 2px 2px #000;

  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 28px;
  }
`;

const InfoCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    flex-wrap: wrap;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const InfoCardImg = styled.img`
  max-width: 300px;

  &:nth-of-type(even) {
    margin-top: 5rem;
  }

  @media ${device.mobileL} {
    width: 275px;

    &:nth-of-type(even) {
      margin-top: 0;
    }
  }
`;
