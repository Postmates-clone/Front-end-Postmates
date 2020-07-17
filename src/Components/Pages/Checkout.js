import React, { useState } from 'react';
import styled from 'styled-components';
import CheckoutUser from '../Layout/CheckoutUser';
import CheckoutCart from '../Layout/CheckoutCart';
import Media from '../../Style/Media';
import DeliveryPopup from '../Layout/DeliveryPopup';

const WapperCheckout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const InnerBlock = styled.div`
  ${Media.desktop`
    width: 1024px;
    display: flex;
    justify-content: space-between;
  `}
`;

const Checkout = ({
  deliveryAddress,
  requestTime,
  payment,
  userInfo,
  storeInfo,
}) => {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <WapperCheckout>
      {openPopUp && (
        <DeliveryPopup
          storeInfo={storeInfo}
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
        />
      )}
      <InnerBlock>
        <CheckoutUser
          deliveryAddress={deliveryAddress}
          requestTime={requestTime}
          payment={payment}
          userInfo={userInfo}
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
        />
        <CheckoutCart storeInfo={storeInfo} />
      </InnerBlock>
    </WapperCheckout>
  );
};

export default Checkout;
