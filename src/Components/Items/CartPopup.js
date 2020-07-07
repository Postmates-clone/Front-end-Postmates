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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Button } from './ProductInfo';
import { REMOVE_FROM_CART } from '../../Modules/CartReducer';
import { CloseBtn } from '../../Style/PopUp';
import { closeIcon } from '../../Style/IconStyles';
import { itemColor } from './ItemPopup';

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
  padding: 1.5rem;
  background: #fff;
  position: absolute;
  overflow-y: hidden;
  right: 0;
  margin-top: 10px;
  border: 1px solid lightgray;

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

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
`;

const CountBlock = styled.div`
  min-width: 10%;
  text-align: left;
`;

const DetailBlock = styled.div`
  min-width: 60%;
  display: flex;
  flex-direction: column;
`;
const DetailNameBlock = styled.div``;

const DetailOptionBlock = styled.div``;

const PriceBlock = styled.div`
  min-width: 20%;
`;

const RemoveBlock = styled.div`
  min-width: 10%;
  text-align: right;
`;

const RemoveBtn = styled.div`
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const CartPopup = ({ item, visible }) => {
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
          <h2>Order</h2>
          <ContentBlock>
            {cart.map((item) => (
              <>
                <CountBlock>{item.count}</CountBlock>
                <DetailBlock>
                  <DetailNameBlock>{item.name}</DetailNameBlock>
                  <DetailOptionBlock>선택한 옵션</DetailOptionBlock>
                  <span>{item.instruction}</span>
                  <span>
                    {`$${Number(item.base_price * item.count).toFixed(2)}`}
                  </span>
                </DetailBlock>
                <RemoveBlock>
                  <RemoveBtn onClick={() => onRemove(item.name)}>
                    {closeIcon}
                  </RemoveBtn>
                </RemoveBlock>
              </>
            ))}
          </ContentBlock>
          <div>Subtotal</div>
          <PriceBlock>
            {`$${cart
              .reduce((prev, curr) => {
                return prev + curr.base_price * curr.count;
              }, 0)
              .toFixed(2)}`}
          </PriceBlock>
          <ButtonGroup>
            <Button>CHECKOUT</Button>
          </ButtonGroup>
        </DialogBlock>
      )}
    </>
  );
};

export default CartPopup;
