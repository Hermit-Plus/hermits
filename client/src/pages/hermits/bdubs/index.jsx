import React from 'react';
import { hermits } from '../../../components/data/hermits';
import {
  FaYoutube,
  FaTwitch,
  FaPatreon,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

import styled from 'styled-components';

const hermit = hermits[0];

const Bdubs = () => {
  return (
    <Container>
      <Divide>
        <div>
          <img src={hermit.aliasImg} alt={hermit.aliasAlt} />

          <h2>Name: {hermit.name}</h2>
          <h2>Subs: {hermit.subs}</h2>
          <h2>From: {hermit.from}</h2>
          <h2>Quote: {hermit.quote}</h2>
          <p>{hermit.info}</p>
          <BtnWrap>
            <Button>Season 8</Button>
            <Button>All Videos</Button>
            <Button>Music</Button>
          </BtnWrap>
        </div>
        <RightDiv>
          <Social>
            <a href={hermit.youtube} target='_blank' rel='noreferrer'>
              <FaYoutube />
            </a>
            <a href={hermit.twitch} target='_blank' rel='noreferrer'>
              <FaTwitch />
            </a>
            <a href={hermit.patreon} target='_blank' rel='noreferrer'>
              <FaPatreon />
            </a>
            <a href={hermit.instagram} target='_blank' rel='noreferrer'>
              <FaInstagram />
            </a>
            <a href={hermit.twitter} target='_blank' rel='noreferrer'>
              <FaTwitter />
            </a>
          </Social>
          <img src={hermit.skin} alt={hermit.skinAlt} />
        </RightDiv>
      </Divide>
    </Container>
  );
};

export default Bdubs;

const Container = styled.div`
  min-height: calc(100vh - 10vh);
  padding: 70px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/images/minecraft-bg.jpg') center center / cover no-repeat
      fixed;

    content: '';
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Divide = styled.div`
  background-color: var(--burnt);
  opacity: 0.9;
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 2rem;

  h2 {
    margin: 0.5rem 0;
    color: var(--text-main);
  }

  p {
    color: var(--text-main);
  }

  a {
    text-decoration: none;
    color: var(--light-yellow);
  }
`;

const Social = styled.div`
  display: flex;
  font-size: 2rem;
  color: var(--text-main);

  svg {
    margin: 1rem;
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.15rem;
  color: var(--light-yellow);
  background-color: var(--light-green);
  border: none;
  border-radius: 3px;
  padding: 0.4rem 1rem;
  margin-top: 0.5rem;
`;
