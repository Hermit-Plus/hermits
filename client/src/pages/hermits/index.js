import React from 'react';
import { useParams } from 'react-router-dom';

//! If using the json-server, use the useFetch hook. If not, then use the js data hermits.js
//! comment out the useFetch hook
import useFetch from '../../hooks/useFetch';
//! bring in the players js
//import { players } from '../../data/hermits';

import {
  FaYoutube,
  FaTwitch,
  FaPatreon,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

import styled from 'styled-components';

const Hermits = () => {
  //! comment out the id and useFetch hook to show just bdubs on access to page
  const { id } = useParams();

  const {
    data: player,
    loading,
    error
  } = useFetch('http://localhost:8001/players/' + id);

  //! remove comment of player to show just bdubs on access to page
  //const player = players[0];

  return (
    <Container>
      {player && (
        <Divide key={player.id}>
          <LeftDiv>
            <img src={player.aliasImg} alt={player.aliasAlt} />

            <h2>Name: &nbsp;{player.name}</h2>
            <h2>Subs: &nbsp;{player.subs}</h2>
            <h2>From: &nbsp;{player.from}</h2>
            <h2>Quote: &nbsp;{player.quote}</h2>
            <h2>Info:</h2>
            <p>{player.info}</p>
            <p>{player.info2}</p>
            <BtnWrap>
              <Button>Season 8</Button>
              <Button>All Videos</Button>
              <Button>Music</Button>
            </BtnWrap>
          </LeftDiv>
          <RightDiv>
            <Social>
              <a
                href={player.youtube}
                target='_blank'
                rel='noreferrer'
                tabIndex='0'>
                <FaYoutube />
              </a>
              <a
                href={player.twitch}
                target='_blank'
                rel='noreferrer'
                tabIndex='0'>
                <FaTwitch />
              </a>
              <a
                href={player.patreon}
                target='_blank'
                rel='noreferrer'
                tabIndex='0'>
                <FaPatreon />
              </a>
              <a
                href={player.instagram}
                target='_blank'
                rel='noreferrer'
                tabIndex='0'>
                <FaInstagram />
              </a>
              <a
                href={player.twitter}
                target='_blank'
                rel='noreferrer'
                tabIndex='0'>
                <FaTwitter />
              </a>
            </Social>
            <HermitSkin src={player.skin} alt={player.skinAlt} />
          </RightDiv>
        </Divide>
      )}
    </Container>
  );
};

export default Hermits;

const Container = styled.div`
  min-height: 100vh;
  padding: 70px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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
  border-radius: 5px;
  opacity: 0.9;
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 2rem;
  width: 90vw;
  height: 75vh;

  h2 {
    margin: 0.5rem 0;
    color: var(--text-main);
  }

  p {
    color: var(--text-main);
    padding-top: 1rem;
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

    &:hover {
      color: var(--light-blue);
    }
  }
`;

const LeftDiv = styled.div`
  img {
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  font-family: 'Kanit', sans-serif;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.15rem;
  color: var(--light-yellow);
  background-color: var(--light-green);
  border: none;
  border-radius: 3px;
  padding: 0.4rem 1rem;
  margin-top: 0.5rem;

  &:hover {
    color: var(--text-dark);
    background-color: var(--primary-light-color);
  }
`;

const HermitSkin = styled.img`
  width: 270px;
  height: 360px;
`;
