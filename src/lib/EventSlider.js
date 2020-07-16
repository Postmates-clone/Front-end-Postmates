/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useWindowSize from './useWindowSize';

const SliderBlock = styled.div``;
const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const SliderContainer = styled.ul`
  width: 100%;
  display: flex;
`;

const PrevBtn = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: -20px;
  z-index: 60;

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
  z-index: 60;

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

const Slider = ({ list, children }) => {
  const sizes = {
    desktop: 1060,
    tablet: 1059,
    mobile: 767,
  };

  const windowSize = useWindowSize();

  // console.log(getWindowSize);

  // console.log(list);
  // console.log(category === 'nearby');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= list.length - 2) {
      setCurrentSlide(currentSlide);
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

  // let device = '';
  let size = '';

  const moveSlide = (cur) => {
    if (windowSize.width > sizes.desktop) {
      // device = 'desktop';
      size = `-${cur * 494 + cur * 36}px`;
    } else if (
      windowSize.width < sizes.tablet &&
      windowSize.width > sizes.mobile
    ) {
      // device = 'tablet';
      size = `calc(-${cur * 50}% - ${cur * 12}px)`;
    } else {
      // device = 'mobile';
      size = `-${cur * 100}%`;
    }

    // console.log(device);
    // console.log(size);

    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(${cur ? size : 0})`;
  };

  useEffect(() => {
    const cur = currentSlide;

    moveSlide(cur);
  }, [currentSlide]);

  return (
    <SliderBlock>
      {currentSlide > 0 && (
        <PrevBtn onClick={prevSlide}>
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
      )}
      {list.length - 2 !== currentSlide && (
        <NextBtn onClick={nextSlide}>
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
      )}
      <SliderWrapper>
        <SliderContainer ref={slideRef}>{children}</SliderContainer>
      </SliderWrapper>
    </SliderBlock>
  );
};

export default Slider;
