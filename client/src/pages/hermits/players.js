import React from 'react';
import PlayerCard from '../../components/playerCard';
import useFetch from '../../hooks/useFetch';

import styled from 'styled-components';
import { device } from '../../responsive';

function Players() {
  const {
    data: players,
    loading,
    error
  } = useFetch('http://localhost:8001/players');

  return (
    <Container>
      <PlayerWrap>
        {players &&
          players.map((player) => {
            return <PlayerCard player={player} />;
          })}
      </PlayerWrap>
    </Container>
  );
}

export default Players;

const Container = styled.div`
  min-height: 100vh;
  padding: 70px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    background: url('/images/home-background-green.png') center center / cover
      no-repeat fixed;

    content: '';
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const PlayerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1366px;
`;
