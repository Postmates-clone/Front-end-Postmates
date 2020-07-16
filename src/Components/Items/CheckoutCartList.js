import React from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import { useSelector } from 'react-redux';
import CartListItem from './CartListItem';

const WarpperCartList = styled.div`
  padding: 20px;
`;

const StoreTitle = styled.h4`
  border-bottom: 1px solid #d9dbe0;
  padding-bottom: 16px;
`;

const DeliveryPrice = styled.div`
  border-top: 1px solid #d9dbe0;
`;

const CartList = styled.ul``;

const CheckoutCartList = ({ storeInfo }) => {
  const { cart } = useSelector((state) => ({
    cart: state.Cart.cart,
  }));
  console.log(cart);
  return (
    <WarpperCartList>
      <StoreTitle>{storeInfo.name}</StoreTitle>
      <CartList>
        {cart.length
          ? cart.map((item) => <CartListItem key={item.id} item={item} />)
          : ''}
      </CartList>
      <DeliveryPrice>{storeInfo.delivery_fee}</DeliveryPrice>
    </WarpperCartList>
  );
};

export default CheckoutCartList;
