import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainPage from '../Components/Pages/Main';
import { setPage } from '../Modules/MainReducer';

const MainContainer = () => {
  const { place, geoCode } = useSelector((state) => ({
    place: state.Location.place,
    geoCode: state.Location.geoCode,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('main'));
  }, [dispatch]);
  return <MainPage place={place} geoCode={geoCode} />;
};

export default MainContainer;
