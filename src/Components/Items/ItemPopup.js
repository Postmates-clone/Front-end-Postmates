/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import { DevApi } from '../Dev/DevItemApi';
// import { options } from '../../Dev/DevOptionMockup';
// import { useSelector, useDispatch } from 'react-redux';
import { Button } from './ProductInfo';
import { IconImage } from '../Layout/MainBanner';
import xIcon from '../../Assets/xicon.png';

const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity:1;
}
`;

const fadeOut = keyframes`
from{
  opacity: 1;
}
to{
  opacity:0;
}
`;

const slideUp = keyframes`
from{
  transform: translateY(200px)
}
to{
  transform: translateY(0px)
}
`;

const slideDown = keyframes`
from{
  transform: translateY(0px)
}
to{
  transform: translateY(200px)
}
`;

const OpacityBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0%);
  transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  background: rgba(0, 0, 0, 0.1);

  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 524px;
  height: 512px;
  padding-left: 1.5rem;
  background: #fff;

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.33;
    color: #8f95a3;
  }

  animation-duration: 0.15s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const ItemPopup = ({
  item,
  title,
  children,
  buttonText,
  visible,
  onCancel,
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  const { name, description, img_url, base_price, options } = item;

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }
    // visible 값이 바뀔 때마다 localvisible 동기화
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <OpacityBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <IconImage cursor src={xIcon} onClick={onCancel} />
        <h1>{title}</h1>
        <p>{children}</p>
        <ButtonGroup>
          <Button>count자리</Button>
          <Button>{buttonText}</Button>
        </ButtonGroup>
      </DialogBlock>
    </OpacityBackground>
  );
};

export default ItemPopup;
