/* eslint-disable */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import SlidingPane from 'react-sliding-pane';
import { REMOVE_FROM_CART, CLEAR_CART } from '../../Modules/CartReducer';
import { closeIcon } from '../../Style/IconStyles';
import { Button } from './ProductInfo';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Cart.css';
import { LoginBtn } from '../../Style/BasicBtn';

const WarpCart = styled.div``;

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
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px auto;
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

const renderOptions = (options) => {
  const optionList = Object.keys(options).map((key) => {
    return options[key];
  });

  return optionList.map((option) => (
    <div>
      {option.id}: {option.name}, ${option.price}
    </div>
  ));
};

const deliveryObj = {
  id: 0,
  url: '',
  store_img: '',
  total_price: 0,
  ordered_date: '',
  ordered_menus: [],
};

const menuObj = {
  id: 0,
  name: '',
  options: [],
};

const optionObj = {
  id: 0,
  name: '',
  price: 0,
};

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

  const cartTotalPrice = cart.reduce((prev, curr) => {
    return prev + curr.totalPrice;
  }, 0);

  const cartTotalCount = cart.reduce((prev, curr) => {
    return prev + curr.count;
  }, 0);

  return (
    <WarpCart>
      <LoginBtn
        onClick={() => setState({ isPaneOpen: true })}
        active
        height="45px"
        width="100%"
        text={`${cartTotalCount} ITEMS`}
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
                  <DetailOptionBlock>
                    {renderOptions(item.options)}
                  </DetailOptionBlock>
                  <div>{item.instruction}</div>
                  <PriceBlock> {`$${item.totalPrice.toFixed(2)}`}</PriceBlock>
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
            <TotalPriceBlock>{`$${cartTotalPrice.toFixed(2)}`}</TotalPriceBlock>
            <PriceText>Delivery</PriceText>
            <TotalPriceBlock>{`$${storeData.delivery_fee.toFixed(
              2,
            )}`}</TotalPriceBlock>
            <PriceText active>Total</PriceText>
            <TotalPriceBlock active>
              {`$${(cartTotalPrice + storeData.delivery_fee).toFixed(2)}`}
            </TotalPriceBlock>
          </SubTotalBlock>
          <ButtonGroup>
            {/* <Link to="/checkout" onClick={() => console.log(1111)}> */}
            <Button onClick={() => console.log(1111)}>CHECKOUT</Button>
            {/* </Link> */}
          </ButtonGroup>
        </DialogBlock>
      </SlidingPane>
    </WarpCart>
  );
};

export default Cart;
