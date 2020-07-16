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

const CheckoutCart = ({ storeInfo }) => {
  console.log('storeinfo', storeInfo);
  return (
    <WrapperCheckoutCart>
      <Map storeInfo={storeInfo} />
      <CheckoutCartList storeInfo={storeInfo} />
    </WrapperCheckoutCart>
  );
};

export default CheckoutCart;
