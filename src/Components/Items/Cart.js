/* eslint-disable */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import SlidingPane from 'react-sliding-pane';
import { REMOVE_FROM_CART, CLEAR_CART } from '../../Modules/CartReducer';
import { closeIcon } from '../../Style/IconStyles';
import { Button } from './ProductInfo';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Cart.css';
import { LoginBtn } from '../../Style/BasicBtn';
import { Link } from 'react-router-dom';

const DialogBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
`;

const CartName = styled.div`
  color: rgb(143, 149, 163);
  text-align: center;
  justify-content: center;
  min-width: 20%;
  max-width: 90%;
  margin: 0 auto;
`;

const ContentBlock = styled.div`
  width: 345px;
  height: 104px;
  /* margin: 0 auto; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
`;

export const CountBlock = styled.div`
  min-width: 10%;
  max-width: 10%;
  max-height: 30%;
  text-align: center;
  padding: 1%;
  background-color: rgb(246, 246, 248);
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
  color: rgb(143, 149, 163);
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
  margin-top: 230px;
`;

const TotalPriceBlock = styled.div`
  color: ${(props) => (props.active ? '#00CC99' : 'rgb(143, 149, 163)')};
  min-width: 50%;
  max-width: 50%;
  text-align: right;
`;

const PriceText = styled.div`
  color: ${(props) => (props.active ? '#000000' : 'rgb(143, 149, 163)')};
  min-width: 50%;
  max-width: 50%;
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
  text-align: center;
  max-height: 80%;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);
  const storeData = useSelector((state) => state.Item.store);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const onRemove = (name) => {
    console.log('WHAT IS THE NAME', name);
    dispatch({ type: REMOVE_FROM_CART, payload: name });
  };

  return (
    <div>
      <LoginBtn
        onClick={() => setState({ isPaneOpen: true })}
        active
        text="ITEMS"
      />
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
          <HeaderBlock>
            <RemoveBlock>
              <RemoveBtn
                onClick={() => {
                  setState({ isPaneOpen: false });
                }}
              >
                {closeIcon}
              </RemoveBtn>
            </RemoveBlock>
            <CartName>Cart - {storeData.name}</CartName>
          </HeaderBlock>
          {cart.map((item) => (
            <>
              <ContentBlock>
                <CountBlock>{item.count}</CountBlock>
                <DetailBlock>
                  <DetailNameBlock>{item.name}</DetailNameBlock>
                  {/* TODO: option 들어오게 수정필요. */}
                  <DetailOptionBlock>{item.options}</DetailOptionBlock>
                  <div>{item.instruction}</div>
                  <PriceBlock>
                    {' '}
                    {`$${Number(item.price * item.count).toFixed(2)}`}
                  </PriceBlock>
                </DetailBlock>
                <RemoveBlock>
                  <RemoveBtn onClick={() => onRemove(item.name)}>
                    {closeIcon}
                  </RemoveBtn>
                </RemoveBlock>
              </ContentBlock>
            </>
          ))}
          <SubTotalBlock>
            <PriceText>Subtotal</PriceText>
            <TotalPriceBlock>
              {`$${cart
                .reduce((prev, curr) => {
                  return prev + curr.price * curr.count;
                }, 0)
                .toFixed(2)}`}
            </TotalPriceBlock>
            <PriceText>Delivery</PriceText>
            <TotalPriceBlock>$00.00</TotalPriceBlock>
            <PriceText active>Total</PriceText>
            <TotalPriceBlock active>
              {`$${cart
                .reduce((prev, curr) => {
                  return prev + curr.price * curr.count;
                }, 0)
                .toFixed(2)}`}
            </TotalPriceBlock>
          </SubTotalBlock>
          <Link to="/checkout">
            <ButtonGroup>
              <Button>CHECKOUT</Button>
            </ButtonGroup>
          </Link>
        </DialogBlock>
      </SlidingPane>
    </div>
  );
};

export default Cart;
