/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IconImage } from '../Layout/MainBanner';
import xIcon from '../../Assets/xicon.png';
import { AddToCart } from '../../Style/BasicCounter';
import { ADD_TO_CART } from '../../Modules/CartReducer';
import CartPopup from './CartPopup';

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
  flex-direction: row;
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

const ImageBlock = styled.div`
  background-size: cover;
  width: 524px;
  height: 512px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image || null});
  display: flex;
  align-items: center;
  justify-content: center;

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

// couter button
const itemColor = {
  fontBlack: 'rgb(45, 49, 56)',
  fontGray: 'rgba(143, 149, 163, 0.9)',
  pointGreen: 'rgb(0, 204, 153)',
  lineGray: 'rgba(217, 219, 224, 0.5)',
};

const CounterBlock = styled.div`
  display: inline-block;
  height: 54px;

  border: 1px solid ${itemColor.lineGray};
  border-radius: 30px;

  * {
    display: inline-block;
    height: 52px;
    padding: 10px;
    border: 0px;
    color: ${itemColor.fontBlack};
    font-family: 'Postmates Std', 'Helvetica Neue', sans-serif;
  }

  button {
    width: 61px;
    background-color: #fff;
    outline: none;
    border-radius: 30px;
    font-weight: bold;
  }
`;

const Increase = styled.button``;
const Decrease = styled.button`
  color: ${(props) => (props.active ? null : itemColor.fontGray)};
  /* color: ${itemColor.fontGray}; */
`;
const Value = styled.div`
  width: 30px;
`;

export const Counter = ({ active }) => {
  return (
    <CounterBlock>
      <Decrease active={active}>-</Decrease>
      <Value>1</Value>
      <Increase>+</Increase>
    </CounterBlock>
  );
};

const ItemPopup = ({ item, visible, onCancel, active }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);

  const onIncrease = () => setCount((_count) => _count + 1);
  const onDecrease = () => {
    if (count <= 1) return;
    setCount((_count) => _count - 1);
  };

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const [addInstruction, setAddInstruction] = useState('');

  const { name, description, img_url, base_price, options } = item;

  const onClick = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...item, count, instruction: addInstruction },
    });
    if (addInstruction.lenght > 200) return;
    setAddInstruction('');
    onCancel();
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setAddInstruction(e.target.value);
  };

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }
    // visible 값이 바뀔 때마다 localvisible 동기화
    setLocalVisible(visible);
  }, [localVisible, visible]);
  // const prices = options.map((option) => option);
  if (!animate && !localVisible) return null;
  return (
    <OpacityBackground disappear={!visible}>
      {img_url !== '' ? <ImageBlock image={img_url} /> : null}
      <DialogBlock disappear={!visible}>
        <IconImage cursor src={xIcon} onClick={onCancel} />
        <h1>{name}</h1>
        <p>{description}</p>
        <p>옵션</p>
        <hr />
        <h2>SPECIAL INSTRUCTIONS</h2>
        <textarea
          maxLength={200}
          placeholder="Add Instructions..."
          value={addInstruction}
          onChange={onChange}
        />
        <p>{addInstruction.length}/200</p>
        <hr />
        <ButtonGroup>
          {/* counter */}
          <CounterBlock>
            <Decrease active={active} onClick={onDecrease}>
              -
            </Decrease>
            <Value>{count}</Value>
            <Increase onClick={onIncrease}>+</Increase>
          </CounterBlock>
          <AddToCart
            active
            text="Add To Cart"
            totalprice={(Number(base_price) * count).toFixed(2)}
            onClick={onClick}
          />
        </ButtonGroup>
      </DialogBlock>
    </OpacityBackground>
  );
};

export default ItemPopup;
