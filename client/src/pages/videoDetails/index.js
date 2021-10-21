import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import Modal from 'react-modal';
import ReactPlayer from 'react-player';

import { FaPlay, FaPlus, FaHeart } from 'react-icons/fa';

import styled from 'styled-components';
import { device } from '../../responsive';

function Detail() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const {
    data: vidDetails,
    loading,
    error
  } = useFetch('http://localhost:8001/vidDetails/' + id);

  return (
    <Container>
      {vidDetails && (
        <>
          <Background>
            <BlackFade />
            <img src={vidDetails.cardImg} alt='' />
          </Background>

          <VidSplit>
            <VidLeft>
              <ImageTitle>
                <img src={vidDetails.aliasImg} alt='' />
              </ImageTitle>
              <VideoTitle>{vidDetails.title}</VideoTitle>
              <Controls>
                <PlayButton onClick={() => setModalOpen(true)}>
                  <FaPlay /> &nbsp;
                  <span>PLAY</span>
                </PlayButton>
                <Modal
                  isOpen={modalOpen}
                  style={{
                    overlay: {},
                    content: {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '5px',
                      top: '10vh',
                      left: '100px',
                      right: '100px',
                      bottom: '70px',
                      background: '#333'
                    }
                  }}>
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    controls
                    url={`https://www.youtube.com/watch?v=${vidDetails.videoLoc}&t=13s`}
                  />
                  <div className='modal-info'>
                    <button onClick={() => setModalOpen(false)}>close</button>
                  </div>
                </Modal>

                <TrailerButton>
                  <span>INFORMATION</span>
                </TrailerButton>
                <AddButton>
                  <FaPlus />
                </AddButton>
                <GroupWatchButton>
                  <FaHeart />
                </GroupWatchButton>
              </Controls>
              <SubTitle>{vidDetails.subTitle}</SubTitle>
              <Description>{vidDetails.description}</Description>
            </VidLeft>
            <VidRight>
              <RestHermits src={vidDetails.videoPreview} alt='' />
              <RestDiv>
                <Link to=''>
                  <img src={vidDetails.hermit01} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit02} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit03} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit04} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit05} alt='' />
                </Link>
              </RestDiv>
              <RestDiv>
                <Link to=''>
                  <img src={vidDetails.hermit06} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit07} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit08} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit09} alt='' />
                </Link>
                <Link to=''>
                  <img src={vidDetails.hermit10} alt='' />
                </Link>
              </RestDiv>
            </VidRight>
          </VidSplit>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  /* min-height: calc(100vh - 70px); */
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const BlackFade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(to right, #000 40%, rgba(255, 255, 255, 0));
`;

const VidSplit = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  width: 1366px;
  grid-template-columns: 50% 50%;
`;

const VidLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const VidRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RestHermits = styled.img`
  width: 326px;
  border-radius: 5px;
  border: 4px solid var(--burnt);
`;

const RestDiv = styled.div`
  display: flex;

  &:nth-of-type(odd) {
    margin-top: 2em;
  }

  img {
    width: 50px;
    margin: 0.5rem 12px;
  }
`;

// const HermitFace = styled.img`
//   width: 50px;
// `;

const ImageTitle = styled.div`
  height: 15vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  /* margin: 30px 0;
  margin-top: 15vh; */

  img {
    width: 75%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  /* margin-left: 4em; */
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 16px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 48px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    color: rgb(0 0 0);
  }
`;

const AddButton = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  font-size: 30px;
  color: rgb(249, 249, 249);
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 50%;
  border: 2px solid rgb(249, 249, 249); */
  border: none;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.8);
`;

const VideoTitle = styled.h1`
  color: var(--text-main);
  font-size: 48px;
  /* margin-left: 1em; */
`;

const SubTitle = styled.h5`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.p`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  /* margin-left: 2.5em; */
  color: rgb(249, 249, 249);
  max-width: 750px;
`;
