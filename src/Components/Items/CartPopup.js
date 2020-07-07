/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './ProductInfo';
import { REMOVE_FROM_CART } from '../../Modules/CartReducer';

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

const DialogBlock = styled.div`
  width: 350px;
  height: 350px;
  padding-left: 1.5rem;
  background: #fff;
  position: absolute;

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

const CartPopup = ({ item, visible, onCancel }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const [onDialog, setOnDialog] = useState(false);

  const onRemove = (name) => {
    console.log('WHAT IS THE NAME', name);
    dispatch({ type: REMOVE_FROM_CART, payload: name });
  };

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
    <>
      {!onDialog && (
        <DialogBlock disappear={!visible}>
          {cart.map((item) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0',
              }}
            >
              <span>{item.name}</span>
              <span>{item.count}</span>
              <span>{Number(item.base_price * item.count).toFixed(2)}</span>
              <span>선택한 옵션</span>
              <span>{item.instruction}</span>
              <span onClick={() => onRemove(item.name)}>X</span>
              <hr />
            </div>
          ))}
          <div>Subtotal</div>
          {cart
            .reduce((prev, curr) => {
              return prev + curr.base_price * curr.count;
            }, 0)
            .toFixed(2)}
          <ButtonGroup>
            <Button>CHECKOUT</Button>
          </ButtonGroup>
        </DialogBlock>
      )}
    </>
  );
};

export default CartPopup;
