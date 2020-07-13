import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import Map from '../Items/Map';
import CheckoutCartList from '../Items/CheckoutCartList';

const WrapperCheckoutCart = styled.div`
  ${Media.desktop`
    width: 400px;
  `}
`;

const CheckoutCart = () => {
  return (
    <WrapperCheckoutCart>
      <Map />
      <CheckoutCartList />
    </WrapperCheckoutCart>
  );
};

export default CheckoutCart;
