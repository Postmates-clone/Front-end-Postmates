import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import MainPage from '../Components/Pages/Main';
import { setPage } from '../Modules/MainReducer';

const MainContainer = ({ history }) => {
  // console.log(history, 'history');
  const { place, geoCode, page } = useSelector(
    (state) => ({
      place: state.Location.place,
      geoCode: state.Location.geoCode,
      page: state.Main.page,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('main'));
    window.scrollTo({ top: 0 });
  }, [dispatch]);
  return (
    <MainPage place={place} geoCode={geoCode} page={page} history={history} />
  );
};

export default MainContainer;
