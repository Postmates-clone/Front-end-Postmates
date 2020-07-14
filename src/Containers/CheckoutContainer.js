import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkout from '../Components/Pages/Checkout';

const CheckoutContainer = () => {
  const { deliveryAddress, requestTime, payment, userInfo } = useSelector(
    (state) => ({
      deliveryAddress: state.Checkout.deliveryAddress,
      requestTime: state.Checkout.time,
      payment: state.Checkout.payment,
      userInfo: state.User.userInfo,
    }),
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Checkout
        deliveryAddress={deliveryAddress}
        requestTime={requestTime}
        payment={payment}
        dispatch={dispatch}
        userInfo={userInfo}
      />
    </div>
  );
};

export default CheckoutContainer;
