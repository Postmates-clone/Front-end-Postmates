/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import SlidingPane from 'react-sliding-pane';
import {
  REMOVE_FROM_CART,
  openCart,
  addCount,
} from '../../Modules/CartReducer';
import { closeIcon } from '../../Style/IconStyles';
// import { Button } from './ProductInfo';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Cart.css';
// import { LoginBtn } from '../../Style/BasicBtn';
import { DevApi } from '../../Dev/DevApi';
import { BasicBtn } from '../../Style/BasicBtn';

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

  & > div {
    color: #00cc99;
    margin-top: 12px;
  }
`;

const ContentBlock = styled.div`
  width: 345px;
  height: 130px;
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
  height: 30px;
  text-align: center;
  padding: 7px;
  background-color: rgb(246, 246, 248);
`;

const DetailBlock = styled.div`
  min-width: 60%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  padding: 1%;
`;
const DetailNameBlock = styled.div`
  white-space: normal;
  word-break: break-all;
`;

const DetailOptionBlock = styled.div`
  color: rgb(143, 149, 163);
  font-size: 14px;
`;

const DetailInstruction = styled.div`
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsiss;
`;

const OptionsName = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
`;

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

  return optionList.map((option) => <OptionsName>{option.name}</OptionsName>);
};

const deliveryObj = {
  id: 0,
  url: '',
  store_img: '',
  total_price: 0,
  ordered_date: '',
  ordered_menus: [],
};

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);
  const isPaneOpen = useSelector((state) => state.Cart.isPaneOpen);
  const cartTotalCount = useSelector((state) => state.Cart.totalCount);
  const storeData = useSelector((state) => state.Item.store);
  const user = useSelector((state) => state.User.userInfo);
  const [deliveryState, setDeliveryState] = useState(deliveryObj);

  const onRemove = (name) => {
    // console.log('WHAT IS THE NAME', name);
    dispatch({ type: REMOVE_FROM_CART, payload: name });
  };

  const cartTotalPrice = cart.reduce((prev, curr) => {
    return prev + curr.totalPrice;
  }, 0);

  const addTotalCount = () => {
    const count = cart.reduce((prev, curr) => prev + curr.count, 0);
    dispatch(addCount(count));
  };

  const setOrderedMenu = () => {
    let orderedMennu = [];
    // eslint-disable-next-line no-unused-vars
    orderedMennu = cart.map(({ id, name, option, totalPrice, count }) => ({
      id,
      name,
      total_price: totalPrice,
      quantity: count,
      option: [],
    }));
    return orderedMennu;
  };

  const setDelivery = () => {
    console.log('storeData', storeData);
    setDeliveryState({
      url: storeData.url,
      total_price: cartTotalPrice,
      ordered_menus: setOrderedMenu(),
    });
    // console.log('delivery', deliveryState);
  };

  useEffect(() => {
    setDelivery();
    addTotalCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const postDelivery = async () => {
    console.log(deliveryState);
    const data = await DevApi.postDelivery(deliveryState);
    console.log('resdata', data);
    history.replace('/checkout');
  };

  return (
    <WarpCart>
      {/* <LoginBtn
        onClick={() => setState({ isPaneOpen: true })}
        active
        height="45px"
        width="100%"
        text={`${cartTotalCount} ITEMS`}
      /> */}
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="Cart"
        width="440px"
        hideHeader
        shouldCloseOnEsc
        onRequestClose={() => {
          dispatch(openCart(false));
        }}
      >
        <DialogBlock>
          <HeaderBlock>
            <RemoveBlock>
              <RemoveBtn
                onClick={() => {
                  dispatch(openCart(false));
                }}
              >
                {closeIcon}
              </RemoveBtn>
            </RemoveBlock>
            <CartName>
              Cart - {storeData.name}
              {user.username ? (
                <div>
                  hello! {user.username} you&rsquo;re added {cartTotalCount}{' '}
                  items.
                </div>
              ) : (
                ''
              )}
            </CartName>
          </HeaderBlock>
          {cart.map((item) => (
            <>
              <ContentBlock>
                <CountBlock>{item.count}</CountBlock>
                <DetailBlock>
                  <DetailNameBlock>{item.name}</DetailNameBlock>
                  <DetailOptionBlock>
                    {renderOptions(item.options)}
                  </DetailOptionBlock>
                  <DetailInstruction>{item.instruction}</DetailInstruction>
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
            <TotalPriceBlock>
              {`$${storeData.delivery_fee.toFixed(2)}`}
            </TotalPriceBlock>
            <PriceText active>Total</PriceText>
            <TotalPriceBlock active>
              {`$${(cartTotalPrice + storeData.delivery_fee).toFixed(2)}`}
            </TotalPriceBlock>
          </SubTotalBlock>
          <ButtonGroup>
            {/* <Link to="/checkout" onClick={() => console.log(1111)}> */}
            {/* <Button onClick={() => postDelivery()}>CHECKOUT</Button> */}
            <BasicBtn
              onClick={() => postDelivery()}
              active
              text="CHECKOUT"
              width="100%"
              twidth="100%"
              mwidth="100%"
            />
            {/* </Link> */}
          </ButtonGroup>
        </DialogBlock>
      </SlidingPane>
    </WarpCart>
  );
};

export default Cart;
