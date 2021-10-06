import React from 'react';

import ImgSlider from '../../components/imgSlider/imgSlider';
import Videos from '../../components/video';
import Specials from '../../components/special';

import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Specials />
      <Videos />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  padding: 70px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/images/home-background-green.png') center center / cover
      no-repeat fixed;
    content: '';
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
