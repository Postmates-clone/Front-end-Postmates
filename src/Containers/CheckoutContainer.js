import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkout from '../Components/Pages/Checkout';
import { setPage } from '../Modules/MainReducer';
import { DevApi } from '../Dev/DevApi';

const CheckoutContainer = () => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.User.userInfo,
  }));
  const [storeInfo, setStoreInfo] = useState({
    id: 0,
    name: '',
    ordered_date: '',
    ordered_menus: [],
    store_img: '',
    total_price: 0,
    url: '',
    delivery_fee: 0,
  });

  const setResData = useCallback((data) => {
    const lastLangth = data.results.length - 1;
    const checkoutStore = data.results[lastLangth];
    setStoreInfo(checkoutStore);
  }, []);

  const getDelivery = async () => {
    const { data } = await DevApi.getDelivery();
    console.log('checkout res', data);
    setResData(data);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('checkout'));
    getDelivery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <Checkout dispatch={dispatch} userInfo={userInfo} storeInfo={storeInfo} />
    </div>
  );
};

export default CheckoutContainer;
