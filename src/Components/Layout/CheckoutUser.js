import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import { BasicBtn } from '../../Style/BasicBtn';
import CheckoutUserItem from '../Items/CheckoutUserItem';

const WrapperCheckoutUser = styled.div`
  ${Media.desktop`
    width: 500px;
  `}
`;

const CheckoutUser = ({ userInfo }) => {
  return (
    <WrapperCheckoutUser>
      <h2>Checkout</h2>
      <div>Delivery</div>
      <CheckoutUserItem title="User Info" itemprops={userInfo} />
      <CheckoutUserItem title="User Info" itemprops={userInfo} />
      <CheckoutUserItem itemprops={userInfo} />
      <BasicBtn active text="CONTINUE" width="300px" />
    </WrapperCheckoutUser>
  );
};

export default CheckoutUser;
