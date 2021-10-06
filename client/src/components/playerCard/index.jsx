import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import useFetch from '../../hooks/useFetch';

import styled from 'styled-components';

const PlayerCard = ({ player }) => {
  //const { id } = useParams();

  // const { data, loading, error } = useFetch(
  //   'http://localhost:8001/players/' + id
  // );

  return (
    <Wrapper>
      <FaceWrap>
        <HermitImg src={player.face} alt={player.faceAlt} />
        <h1>{player.alias}</h1>
      </FaceWrap>
      <HermitInfo>
        <Link to={`/hermits/${player.id}`}>
          <p>Info</p>
        </Link>
        <Link to=''>
          <p>Fan Art</p>
        </Link>
      </HermitInfo>
      <HermitInfo>
        <Link to=''>
          <p>Videos</p>
        </Link>
        <Link to=''>
          <p>Seasons</p>
        </Link>
      </HermitInfo>
    </Wrapper>
  );
};

export default PlayerCard;

const Wrapper = styled.div`
  background-color: var(--primary-light-color);
  margin: 0.5rem;
  padding: 0.3rem;
  border-radius: 1rem;
`;

const FaceWrap = styled.div`
  text-align: center;
  color: var(--secondary-light-color);
  font-size: 1rem;
  border-radius: 1rem;
  border: 2px solid var(--text-dark);
  background: linear-gradient(#e66465, var(--secondary-color));
`;

const HermitImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    75%,
    rgba(0, 0, 0, 0)
  );
`;

const HermitInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;

  a {
    text-align: center;
    text-decoration: none;
    color: var(--text-dark);
    width: 90px;
    padding: 0 0.5em;
    border-radius: 5px;
    border: 2px solid var(--text-dark);
  }

  a:hover {
    background: var(--primary-color);
    color: var(--text-main);
  }
`;
