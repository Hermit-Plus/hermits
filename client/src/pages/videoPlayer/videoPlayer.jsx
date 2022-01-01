import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import useFetch from '../../hooks/useFetch';

import styled from 'styled-components';

const VideoPlayer = () => {
  const { id } = useParams();

  const {
    data: vidDetails // todo bring in loading and error
  } = useFetch('http://localhost:8001/vidDetails/' + id);

  return (
    <VideoContainer>
      <ReactPlayer
        width='100%'
        height='100%'
        controls
        url={vidDetails.videoLoc}
      />
    </VideoContainer>
  );
};

export default VideoPlayer;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
`;
