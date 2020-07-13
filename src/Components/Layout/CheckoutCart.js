import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import Map from '../Items/Map';

const WrapperCheckoutCart = styled.div`
  ${Media.desktop`
    width: 400px;
    background: yellow;
  `}
`;

const CheckoutCart = () => {
  return (
    <WrapperCheckoutCart>
      <Map />
    </WrapperCheckoutCart>
  );
};

export default CheckoutCart;
