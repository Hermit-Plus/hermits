import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { vidCards } from '../../data/videos';

function Videos() {
  return (
    <Container>
      <SectionTitle>First Episode from every Hermit - Season 8</SectionTitle>
      <Content>
        {vidCards &&
          vidCards.map((vid) => (
            <Wrap key={vid.id}>
              <Link to={`/detail/${vid.id}`}>
                <img src={vid.cardImg} alt='video' />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Videos;

const Container = styled.section`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: var(--secondary-light-color);
  margin: 1rem 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  margin-bottom: 50px;
  width: 1300px;
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  width: 322px;
  height: 182px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 320px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 75 0 / 80%) 0px 40px 58px -20px,
      rgb(0 50 0 / 72%) 0px 30px 22px -10px;
  }
`;
