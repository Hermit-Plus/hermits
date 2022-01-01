import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { specials } from '../../data/videos';

/**
 * This is a card for the different segments of hermits for seasons. Like the boat'em and big eye guys of season 8. This was jacked from video.js
 */
function Specials() {
  return (
    <Container>
      <h2>Specials from Season 8</h2>
      <Content>
        {specials &&
          specials.map((card) => (
            <Wrap key={card.id}>
              <Link to={`/detail/${card.id}`}>
                <img src={card.img} alt='special' />
              </Link>
              <Info>
                <h1>{card.name}</h1>
                <p>{card.info}</p>
              </Info>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Specials;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
  margin-left: 6.7rem; //* the sidebar is 6rem wide

  h2 {
    font-size: 24px;
    color: var(--secondary-light-color);
    margin: 1rem 0;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 10px;
  margin-bottom: 50px;
  width: calc(100vw - 11rem);
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  width: 275px;
  /*height: 100%;*/
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 275px;
    /*height: 100%;*/
    object-fit: contain;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 75 0 / 80%) 0px 40px 58px -20px,
      rgb(0 50 0 / 72%) 0px 30px 22px -10px;
  }
`;

const Info = styled.div`
  margin-top: -12rem;
  padding: 0.4rem;
  z-index: 5;

  h1 {
    font-size: 26px;
    letter-spacing: 0.1rem;
    color: var(--text-main);
  }

  p {
    font-size: 14px;
    color: var(--text-main);
    width: 100%;
    padding: 0.5rem;
  }
`;
