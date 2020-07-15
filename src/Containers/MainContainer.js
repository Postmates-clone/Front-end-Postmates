import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainPage from '../Components/Pages/Main';
import { setPage } from '../Modules/MainReducer';

const MainContainer = () => {
  const { place, geoCode, page } = useSelector((state) => ({
    place: state.Location.place,
    geoCode: state.Location.geoCode,
    page: state.Main.page,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('main'));
  }, [dispatch]);
  return <MainPage place={place} geoCode={geoCode} page={page} />;
};

export default MainContainer;
