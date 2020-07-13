/* eslint-disable */

import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { render } from 'react-dom';
import SlidingPane from 'react-sliding-pane';
import { REMOVE_FROM_CART } from '../../Modules/CartReducer';
import { closeIcon } from '../../Style/IconStyles';
import { Button } from './ProductInfo';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Cart.css';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
import { LoginBtn } from '../../Style/BasicBtn';

const DialogBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const CartName = styled.div`
  color: #8f95a3;
  text-align: center;
`;

const ContentBlock = styled.div`
  width: 345px;
  height: 104px;
  /* margin: 0 auto; */
  background-color: #d9dbe0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
`;

const CountBlock = styled.div`
  min-width: 10%;
  max-width: 10%;
  max-height: 30%;
  text-align: center;
  padding: 1%;
  background-color: #8f95a3;
`;

const DetailBlock = styled.div`
  min-width: 60%;
  max-width: 60%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  padding: 1%;
`;
const DetailNameBlock = styled.div`
  white-space: normal;
  word-break: break-all;
`;

const DetailOptionBlock = styled.div``;

const PriceBlock = styled.div`
  min-width: 20%;
  max-width: 20%;
  color: #8f95a3;
`;

const RemoveBlock = styled.div`
  min-width: 10%;
  max-width: 10%;
  text-align: right;
`;

const RemoveBtn = styled.div`
  cursor: pointer;
`;

const SubTotalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-height: 80%;
  padding: 10px;
  width: 100%;
  border-top: 2px solid rgba(217, 219, 224, 0.5);
  margin-top: 180px;
`;

const TotalPriceBlock = styled.div`
  color: ${(props) => (props.active ? '#00CC99' : '#8F95A3')};
  min-width: 50%;
  max-width: 50%;
  text-align: right;
`;

const PriceText = styled.div`
  color: ${(props) => (props.active ? '#000000' : '#8F95A3')};
  min-width: 50%;
  max-width: 50%;
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
  text-align: center;
  max-height: 80%;
`;

const Cart = () => {
  // const [cartDialog, setCartDialog] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const onRemove = (name) => {
    console.log('WHAT IS THE NAME', name);
    dispatch({ type: REMOVE_FROM_CART, payload: name });
  };
  // const onClick = () => {
  //   setCartDialog(true);
  // };

  // const onCancel = () => {
  //   setCartDialog(false);
  // };
  return (
    <div>
      <LoginBtn
        onClick={() => setState({ isPaneOpen: true })}
        active
        text="ITEMS"
      />

      {/* const SlidingPane = styled.dev` ` width: 450px; height: 350px; padding:
      1.5rem; background: #fff; position: absolute; right: 0; margin-top: 10px;
      overflow-y: scroll; */}
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Cart"
        width="440px"
        hideHeader
        shouldCloseOnEsc
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <DialogBlock>
          <CartName>Cart - 가게이름</CartName>
          <ContentBlock>
            <CountBlock>1</CountBlock>
            <DetailBlock>
              <DetailNameBlock>
                Peppermint MochaPeppermint MochaPeppermint Mocha
              </DetailNameBlock>
              <DetailOptionBlock>선택한 옵션</DetailOptionBlock>
              <div>item instruction</div>
              <PriceBlock>$555</PriceBlock>
            </DetailBlock>
            <RemoveBlock>
              <RemoveBtn onClick={() => onRemove()}>{closeIcon}</RemoveBtn>
            </RemoveBlock>
          </ContentBlock>
          <ContentBlock>
            <CountBlock>1</CountBlock>
            <DetailBlock>
              <DetailNameBlock>
                Peppermint MochaPeppermint MochaPeppermint Mocha
              </DetailNameBlock>
              <DetailOptionBlock>선택한 옵션</DetailOptionBlock>
              <div>item instruction</div>
              <PriceBlock>$555</PriceBlock>
            </DetailBlock>
            <RemoveBlock>
              <RemoveBtn onClick={() => onRemove()}>{closeIcon}</RemoveBtn>
            </RemoveBlock>
          </ContentBlock>
          <SubTotalBlock>
            <PriceText>Subtotal</PriceText>
            <TotalPriceBlock>$11.97</TotalPriceBlock>
            <PriceText>Delivery</PriceText>
            <TotalPriceBlock>$11.97</TotalPriceBlock>
            <PriceText active>Total</PriceText>
            <TotalPriceBlock active>$11.97</TotalPriceBlock>
          </SubTotalBlock>
          <ButtonGroup>
            <Button>CHECKOUT</Button>
          </ButtonGroup>
        </DialogBlock>
      </SlidingPane>
    </div>
  );
};

export default Cart;
