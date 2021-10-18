import React from 'react';
import { Link } from 'react-router-dom';

import cubVideo from '../../images/cubFanS8E1thumb.webp';
import docM77Video from '../../images/docm77S8E1thumb.webp';
import bdubVideo from '../../images/bDouble0S8E1thumb.webp';
import cubfanVideo from '../../images/cubFanS8E1thumb.webp';
import ethoVideo from '../../images/ethoS8E1thumb.webp';
import falseVideo from '../../images/falseS8E1thumb.webp';
import geminiVideo from '../../images/geminiS8E1thumb.webp';
import grianVideo from '../../images/grianS8E1thumb.webp';
import hypnoVideo from '../../images/hypnoS8E1thumb.webp';
import impulseVideo from '../../images/impulseS8E1thumb.webp';
import iskalVideo from '../../images/iskalS8E1thumb.webp';
import scarVideo from '../../images/scarS8E1thumb.webp';
import jevinVideo from '../../images/jevinS8E1thumb.webp';
import joeHillsVideo from '../../images/joeHillsS8E1thumb.webp';
import keralisVideo from '../../images/keralisS8E1thumb.webp';
import mumboVideo from '../../images/mumboS8E1thumb.webp';
import pearlMoonVideo from '../../images/pearlMoonS8E1thumb.webp';
import rendogVideo from '../../images/rendogS8E1thumb.webp';
import stressVideo from '../../images/stressS8E1thumb.webp';
import tangoVideo from '../../images/tangoS8E1thumb.webp';
import tinVideo from '../../images/tinS8E1thumb.webp';
import welknightVideo from '../../images/welknightS8E1thumb.webp';
import xbVideo from '../../images/xbS8E1thumb.webp';
import xisumaVideo from '../../images/xisumaS8E1thumb.webp';
import zedaphVideo from '../../images/zedaphS8E1thumb.webp';
import zombieVideo from '../../images/zombieS8E1thumb.webp';

import styled from 'styled-components';
import { device } from '../../responsive';

//? the border of VideoThumb was a separate class. Consider placing on div instead. How will that effect the grid?

const VideoTop = () => {
  return (
    <>
      <section>
        <MobileVideo>
          <MobileThumb src={cubVideo} alt='Cub Fan season eight episode one' />
          <MobileThumb
            src={docM77Video}
            alt='doc m 77 season eight episode one'
          />
          <MobileThumb src={bdubVideo} alt='B dubs season eight episode one' />
        </MobileVideo>
        <DesktopVideo>
          <DesktopGrid className='video-grid'>
            <div>
              <Link>
                <VideoThumb
                  src={bdubVideo}
                  alt='B dubs season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={cubfanVideo}
                  alt='cub fan season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={docM77Video}
                  alt='doc m 77 season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={ethoVideo}
                  alt='ethos lab season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={falseVideo}
                  alt='false symmetry season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={geminiVideo}
                  alt='gemini tay season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={scarVideo}
                  alt='good times with scar season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={grianVideo}
                  alt='grian season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={hypnoVideo}
                  alt='hypnotized season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={jevinVideo}
                  alt='i jevin season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={impulseVideo}
                  alt='impulse season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={iskalVideo}
                  alt='iskall 85 season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={joeHillsVideo}
                  alt='joe hills season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={keralisVideo}
                  alt='keralis season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={mumboVideo}
                  alt='mumbo jumbo season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={pearlMoonVideo}
                  alt='pearlescent moon season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={rendogVideo}
                  alt='ren dog season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={stressVideo}
                  alt='stress monster 101 season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={tangoVideo}
                  alt='tango tek season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={tinVideo}
                  alt='tin foil chef season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={welknightVideo}
                  alt='wells knight season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={xbVideo}
                  alt='x b crafted season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={xisumaVideo}
                  alt='xisuma void season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={zedaphVideo}
                  alt='zedaph plays season eight episode one'
                />
              </Link>
            </div>
            <div>
              <Link>
                <VideoThumb
                  src={zombieVideo}
                  alt='zombie cleo season eight episode one'
                />
              </Link>
            </div>
          </DesktopGrid>
        </DesktopVideo>
      </section>
    </>
  );
};

export default VideoTop;

const MobileVideo = styled.div`
  display: none;

  @media ${device.mobileL} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: var(--light-blue);
  }
`;

const DesktopVideo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-blue);

  @media ${device.mobileL} {
    display: none;
  }
`;

const DesktopGrid = styled.div`
  max-width: ${device.laptopL};
  height: 100%;
  display: grid;
  gap: 2px 2px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 69px);
  margin-top: -50vh;
  overflow: hidden;

  @media ${device.laptopL} {
    /* margin-top: -30%; */
  }

  @media ${device.laptopM} {
    grid-template-rows: repeat(12, 63px);
  }

  @media ${device.laptop} {
    /* margin-top: -40%; */
    grid-template-rows: repeat(12, 49px);
  }

  @media ${device.tablet} {
    /* margin-top: -50%; */
    grid-template-rows: repeat(12, 36px);
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const VideoThumb = styled.img`
  max-width: 236px;
  border-radius: 5px;
  border: 1px solid var(--burnt);

  @media ${device.laptopM} {
    width: 222px;
  }

  @media ${device.laptop} {
    width: 168px;
  }

  @media ${device.tablet} {
    width: 126px;
  }
`;

const MobileThumb = styled(VideoThumb)`
  width: 256px;
  margin-top: -30vh;
  margin-bottom: calc(30vh + 1rem);

  &:last-child {
    margin-bottom: 1rem;
  }
`;
