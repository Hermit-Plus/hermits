import React from 'react';

import XolotiSkin from '../../images/Xoloti_minecraft_skin.png';
import scarSkin from '../../images/scar_minecraft_skin.png';
import BdubsSkin from '../../images/bdouble_minecraft_skin.png';
import mumboSkin from '../../images/mumbo_skin.png';
import grianSkin from '../../images/Grian_Minecraft_Skin.png';
import keralisSkin from '../../images/keralis_minecraft_skin.png';
import EthoSkin from '../../images/etho_minecraft_skin.png';
import IskalSkin from '../../images/iskal_minecraft_skin.png';
import BeefSkin from '../../images/vintage_minecraft_skin.png';

import styled from 'styled-components';
import { device } from '../../responsive';

const LandingHermits = () => {
  return (
    <>
      <LandingHermitsSection>
        <LandingSectionWrapper>
          <Characters>
            <Xisuma src={XolotiSkin} alt='X suma voids Minecraft skin' />
            <Bdubs src={BdubsSkin} alt="B double o's Minecraft skin" />
            <Mumbo src={mumboSkin} alt="Grian's Minecraft skin" />
            <Grian
              className='grian'
              src={grianSkin}
              alt="Grian's Minecraft skin"
            />
            <Scar src={scarSkin} alt="Scar's Minecraft skin" />
            <LandingHermitInfo>
              Introducing Hermit Plus. A web app that shows all the hermits just
              the way you want to see them. All your Hermits gathered in one
              place, presented in a tastefully pleasing format, with all the
              information you want to know about them. This is the experience
              you didn’t know you wanted.
            </LandingHermitInfo>
            <Keralis src={keralisSkin} alt="Keralis's Minecraft skin" />
            <Iskal src={IskalSkin} alt="Iskal's Minecraft skin" />
            <Etho src={EthoSkin} alt="Etho's Minecraft skin" />
            <Beef src={BeefSkin} alt="Vintage Beef's Minecraft skin" />
          </Characters>
        </LandingSectionWrapper>
      </LandingHermitsSection>
    </>
  );
};

export default LandingHermits;

const LandingHermitsSection = styled.section`
  padding-top: 2rem;
`;

const LandingSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingHermitInfo = styled.p`
  position: absolute;
  width: 446px;
  padding: 10px;
  top: 7em;
  left: 20vw;
  background-color: var(--text-main);
  border-radius: 10px;
  line-height: 17px;
  letter-spacing: 0.03em;

  @media ${device.laptopL} {
    left: 32vw;
  }

  @media ${device.laptop} {
    width: 375px;
    top: 3em;
    left: 23vw;
  }

  @media ${device.mobileL} {
    width: 286px;
    left: 1.1rem;
  }
`;

const Characters = styled.div`
  position: absolute;
  display: flex;
  width: 1440px;

  @media ${device.laptopL} {
    width: 1346px;
  }

  @media ${device.laptop} {
    width: 850px;
  }

  @media ${device.tablet} {
    width: 725px;
  }

  @media ${device.mobileL} {
    width: 320px;
  }
`;

const Xisuma = styled.img`
  position: relative;
  top: 0;
  left: -1vw;

  @media ${device.laptopL} {
    left: -2vw;
  }

  @media ${device.laptop} {
    height: 400px;
    left: -5vw;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const Bdubs = styled.img`
  position: relative;
  z-index: 5;
  height: 326px;
  top: 20em;
  left: -5vw;

  @media ${device.laptopL} {
    left: -6vw;
  }

  @media ${device.laptop} {
    height: 163px;
    top: 16em;
    left: -8vw;
  }

  @media ${device.mobileL} {
    left: -2vw;
  }
`;

const Grian = styled.img`
  position: relative;
  z-index: 10;
  height: 300px;
  top: 40em;
  left: -35vw;

  @media ${device.laptopL} {
    left: -68vw;
  }

  @media ${device.laptop} {
    height: 150px;
    top: 20em;
    left: -40vw;
  }

  @media ${device.tablet} {
    height: 150px;
    top: 20em;
    left: -45vw;
  }

  @media ${device.mobileL} {
    left: -31vw;
  }
`;

const Mumbo = styled.img`
  position: relative;
  z-index: 15;
  height: 425px;
  top: 33em;
  left: -19vw;

  @media ${device.laptopL} {
    left: -39vw;
  }

  @media ${device.laptop} {
    height: 212px;
    top: 21em;
    left: -35vw;
  }

  @media ${device.laptop} {
    height: 212px;
    top: 21em;
    left: -40vw;
  }

  @media ${device.mobileL} {
    left: -25vw;
  }
`;

const Scar = styled.img`
  position: relative;
  z-index: 20;
  height: 375px;
  top: 45em;
  left: -31vw;

  @media ${device.laptopL} {
    left: -61vw;
  }

  @media ${device.laptop} {
    height: 187px;
    top: 24em;
    left: -35vw;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const Keralis = styled.img`
  position: relative;
  z-index: 5;
  height: 326px;
  top: 15em;
  left: -20vw;

  @media ${device.laptopL} {
    left: -43vw;
  }

  @media ${device.laptop} {
    height: 226px;
    top: 5em;
    left: -16vw;
  }

  @media ${device.tablet} {
    left: -29vw;
  }

  @media ${device.mobileL} {
    height: 176px;
    top: 15em;
    left: -35vw;
  }
`;

const Iskal = styled.img`
  position: relative;
  z-index: 15;
  height: 326px;
  top: 30em;
  left: -22vw;

  @media ${device.laptopL} {
    height: 432px;
    left: -68vw;
  }

  @media ${device.laptop} {
    height: 163px;
    top: 20em;
    left: -40vw;
  }

  @media ${device.tablet} {
    left: -45vw;
  }

  @media ${device.mobileL} {
    left: -40vw;
  }

  @media ${device.mobileS} {
    top: 24em;
    left: -62vw;
  }
`;

const Etho = styled.img`
  position: relative;
  z-index: 4;
  height: 326px;
  top: 13em;
  left: -30vw;

  @media ${device.laptopL} {
    left: -70vw;
  }

  @media ${device.laptop} {
    height: 163px;
    top: 8em;
    left: -30.5vw;
  }

  @media ${device.tablet} {
    left: -49vw;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const Beef = styled.img`
  position: relative;
  z-index: 15;
  height: 426px;
  top: 30em;
  left: -50vw;

  @media ${device.laptopL} {
    top: 28em;
    left: -91vw;
  }

  @media ${device.laptop} {
    height: 213px;
    top: 17em;
    left: -55vw;
  }

  @media ${device.tablet} {
    left: -68vw;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
