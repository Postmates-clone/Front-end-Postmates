import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkout from '../Components/Pages/Checkout';
import { setPage } from '../Modules/MainReducer';

const CheckoutContainer = () => {
  const {
    deliveryAddress,
    requestTime,
    payment,
    userInfo,
    storeInfo,
  } = useSelector((state) => ({
    deliveryAddress: state.Checkout.deliveryAddress,
    requestTime: state.Checkout.time,
    payment: state.Checkout.payment,
    userInfo: state.User.userInfo,
    storeInfo: state.Item.store,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('checkout'));
  }, [dispatch]);
  return (
    <div>
      <Checkout
        deliveryAddress={deliveryAddress}
        requestTime={requestTime}
        payment={payment}
        dispatch={dispatch}
        userInfo={userInfo}
        storeInfo={storeInfo}
      />
    </div>
  );
};

export default CheckoutContainer;
