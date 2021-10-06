import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useFetch from '../../hooks/useFetch';
//import { players } from '../../data/hermits';

import styled from 'styled-components';

function ImgSlider() {
  const {
    data: players,
    loading,
    error
  } = useFetch('http://localhost:8001/players');
  console.log(players);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Container>
      <Carousel {...settings}>
        {players &&
          players.map((player) => {
            return (
              <Wrap key={player.id}>
                <Link to={`/hermits/${player.id}`}>
                  <img src={player.banner} alt={player.aliasAlt} />
                </Link>
              </Wrap>
            );
          })}
      </Carousel>
    </Container>
  );
}

export default ImgSlider;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

const Carousel = styled(Slider)`
  width: 1500px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active:before {
    color: #fff;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    border-radius: 4px;
    border: 4px solid transparent;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    width: 100%;
    height: 100%;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
