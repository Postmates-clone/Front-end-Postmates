import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../Components/Pages/Main';
import { setPage } from '../Modules/MainReducer';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('main'));
  }, [dispatch]);
  return <MainPage />;
};

export default MainContainer;
