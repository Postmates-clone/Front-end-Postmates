/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const EventItemBlock = styled.ul`
  position: relative;
  display: flex;
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const EventItemBanner = styled.li`
  padding: 20px;
  margin: 0 36px 0 0;

  background-image: url(${(props) => props.image || null});
  color: ${(props) => props.color || 'black'};

  cursor: pointer;

  ${Media.desktop`
  flex: 0 0 calc(50% - 18px);
  padding-top: 22%;
  `}

  ${Media.tablet`
  flex: 0 0 calc(50% - 12px);
  padding-top: 22%;
  `}

  ${Media.mobile`
  flex: 0 0 calc(100% - 32px);
  padding-top: 45%;
  `}

  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.6;
  }

  em {
    font-size: 13px;
  }
`;

const EventItemList = [
  {
    id: 1,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'white',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2F91554dc2f023c2fe0eb6ee3d013a096c.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 2,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2Ffb2b529f92e3caa43210796e98518c7e.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 3,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'white',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2F91554dc2f023c2fe0eb6ee3d013a096c.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 4,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2Ffb2b529f92e3caa43210796e98518c7e.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 5,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'white',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2F91554dc2f023c2fe0eb6ee3d013a096c.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
];

const PrevBtn = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: -20px;
  z-index: 99;

  width: 40px;
  height: 40px;

  background-color: #fff;

  border-radius: 25px;
  border: 1px solid #ccc;

  cursor: pointer;

  svg {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
  }
`;
const NextBtn = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  right: -20px;
  z-index: 99;

  width: 40px;
  height: 40px;

  background-color: #fff;

  border-radius: 25px;
  border: 1px solid #ccc;

  cursor: pointer;

  svg {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
  }
`;

const EventItem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= EventItemList.length - 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${
      (currentSlide * 100) / 2
    }%)`;
  }, [currentSlide]);

  return (
    <EventItemBlock>
      <PrevBtn onClick={prevSlide}>
        {/* <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            id="icon-chevron_svg__a"
            d="M8.5 7.5L13 12l-4.5 4.5L10 18l6-6-6-6z"
          />
        </svg> */}
        <svg
          width="15"
          height="15"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          className="svg-inline--fa fa-chevron-left fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </PrevBtn>
      <NextBtn onClick={nextSlide}>
        {/* <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            id="icon-chevron_svg__a"
            d="M8.5 7.5L13 12l-4.5 4.5L10 18l6-6-6-6z"
          />
        </svg> */}
        <svg
          width="15"
          height="15"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          className="svg-inline--fa fa-chevron-right fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          />
        </svg>
      </NextBtn>
      <SliderWrapper>
        <SliderContainer ref={slideRef}>
          {EventItemList.map((event) => (
            <EventItemBanner
              key={event.id}
              image={event.image}
              color={event.color}
            >
              <h4>{event.title}</h4>
              <em>{event.subscribe}</em>
            </EventItemBanner>
          ))}
        </SliderContainer>
      </SliderWrapper>
    </EventItemBlock>
  );
};

// Get 30 Days Free Unlimited Delivery
// LIMITED TIME ONLY
// Daily Deals
// SAVE BIG
// Support Local Restaurants
// ORDER NOW
// Free Delivery from Trending Restaurants
// JOIN THE PARTY
// Get $25 Off Your Order
// INVITE FRIENDS
export default EventItem;
