import React from 'react';
import styled from 'styled-components';
import CheckoutUser from '../Layout/CheckoutUser';
import CheckoutCart from '../Layout/CheckoutCart';
import Media from '../../Style/Media';

const WapperCheckout = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerBlock = styled.div`
  ${Media.desktop`
    width: 1024px;
    display: flex;
  `}
`;

const Checkout = ({ deliveryAddress, requestTime, payment, userInfo }) => {
  return (
    <WapperCheckout>
      <InnerBlock>
        <CheckoutUser
          deliveryAddress={deliveryAddress}
          requestTime={requestTime}
          payment={payment}
          userInfo={userInfo}
        />
        <CheckoutCart />
      </InnerBlock>
    </WapperCheckout>
  );
};

export default Checkout;
