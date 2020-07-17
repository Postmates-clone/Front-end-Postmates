import React from 'react';
import styled from 'styled-components';

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;

  width: 100%;
  height: 100%;

  background-color: rgba(256, 256, 256, 0.63);
`;
const PopUpBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 901;

  width: ${(props) => props.width || null};
  height: ${(props) => props.height || null};

  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
`;

const PopUp = ({ width, height, children, setState, openState }) => {
  const closePopUp = () => setState(!openState);

  return (
    <>
      <PopUpBlock width={width} height={height}>
        {children}
        <CloseBtn onClick={closePopUp}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <defs>
              <path
                id="icon-close_svg__a"
                d="M0 1.5L1.5 0 8 6.5 14.5 0 16 1.5 9.5 8l6.5 6.5-1.5 1.5L8 9.5 1.5 16 0 14.5 6.5 8z"
              />
            </defs>
            <use xlinkHref="#icon-close_svg__a" transform="translate(4 4)" />
          </svg>
        </CloseBtn>
      </PopUpBlock>
      <Dimmed onClick={closePopUp} />
    </>
  );
};

export default PopUp;
