import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemPage from '../Components/Pages/Item';
import { getStoreAsync } from '../Modules/ItemReducer';
import { setPage } from '../Modules/MainReducer';

const ItemContainer = () => {
  const storeData = useSelector((state) => state.Item.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('item'));
    dispatch(getStoreAsync('jack-in-the-box-los-angeles-516-n-beaudry-ave'));
  }, [dispatch]);

  return <ItemPage storeData={storeData} />;
};

export default ItemContainer;
