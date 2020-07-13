import React from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import { useSelector } from 'react-redux';

const WarpperCartList = styled.div`
  padding: 20px;
`;

const StoreTitle = styled.h4`
  border-bottom: 1px solid #d9dbe0;
  padding-bottom: 16px;
`;

const CheckoutCartList = () => {
  const { cart } = useSelector((state) => ({
    cart: state.Cart.cart,
  }));
  console.log(cart);
  return (
    <WarpperCartList>
      <StoreTitle>Store Title</StoreTitle>
    </WarpperCartList>
  );
};

export default CheckoutCartList;
