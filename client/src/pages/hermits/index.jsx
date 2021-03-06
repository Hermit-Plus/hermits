import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
    data: player // todo bring in loading and error
  } = useFetch('http://localhost:8001/players/' + id);

  //! remove comment of player to show just bdubs on access to page
  //const player = players[0];

  return (
    <Container>
      {player && (
        <Divide key={player.id}>
          <div></div>
          <LeftDiv>
            <img src={player.aliasImg} alt={player.aliasAlt} />

            <h2>Name: &nbsp;{player.name}</h2>
            <h2>Subs: &nbsp;{player.subs}</h2>
            <h2>From: &nbsp;{player.from}</h2>
            <h2>Quote: &nbsp;{player.quote}</h2>
            <h2>Info:</h2>
            <p>{player.info}</p>
            <p>{player.info2}</p>
          </LeftDiv>
          <RightDiv>
            <Social>
              {player.youtube && (
                <a
                  href={player.youtube}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex='0'>
                  <FaYoutube />
                </a>
              )}
              {player.twitch && (
                <a
                  href={player.twitch}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex='0'>
                  <FaTwitch />
                </a>
              )}
              {player.patreon && (
                <a
                  href={player.patreon}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex='0'>
                  <FaPatreon />
                </a>
              )}
              {player.instagram && (
                <a
                  href={player.instagram}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex='0'>
                  <FaInstagram />
                </a>
              )}
              {player.twitter && (
                <a
                  href={player.twitter}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex='0'>
                  <FaTwitter />
                </a>
              )}
            </Social>
            <HermitSkin src={player.skin} alt={player.skinAlt} />
            <BtnWrap>
              <Button>Fan Art</Button>
              <Button>Videos</Button>
              <Button to='/players'>Hermits</Button>
            </BtnWrap>
          </RightDiv>
        </Divide>
      )}
    </Container>
  );
};

export default Hermits;

const Container = styled.div`
  min-height: 100vh;
  margin-left: 6rem;
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
  display: flex;
  grid-template-columns: 50% 50%;
  padding: 2rem;
  width: calc(100vw - 0.5em);
  // width: 90vw; // * old
  height: 75vh;

  h2 {
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
  font-size: 1.8rem;
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
    width: 350px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    padding-top: 1rem;
    width: 550px;
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
  width: 100%;
  margin-top: 1.5rem;
`;

const Button = styled(Link)`
  font-family: 'Kanit', sans-serif;
  cursor: pointer;
  font-size: 14px;
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
  /* width: 270px; */
  height: 250px;
`;
