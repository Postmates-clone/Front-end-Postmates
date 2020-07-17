import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import { BasicBtn } from '../../Style/BasicBtn';
import CheckoutUserItem from '../Items/CheckoutUserItem';

const WrapperCheckoutUser = styled.div`
  ${Media.desktop`
    width: 500px;
  `}
  .WrapperButton {
    margin-top: 40px;
  }
`;

const CheckoutTitle = styled.h2`
  margin-top: 20px;
  font-size: 50px;
`;

const CheckoutUser = ({ userInfo, openPopUp, setOpenPopUp }) => {
  // const closePopUp = () => setOpenPopUp(!openPopUp);
  const startDelivery = () => {
    setOpenPopUp(!openPopUp);
  };

  return (
    <WrapperCheckoutUser>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutUserItem title="User Name" itemprops={userInfo.username} />
      <CheckoutUserItem title="Delivery Address" itemprops={userInfo.address} />
      <CheckoutUserItem title="Phone" itemprops={userInfo.phone} />
      <div className="WrapperButton">
        <BasicBtn active text="CONTINUE" width="100%" onClick={startDelivery} />
      </div>
    </WrapperCheckoutUser>
  );
};

export default CheckoutUser;
