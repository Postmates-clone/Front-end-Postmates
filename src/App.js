import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainRouter from './Router/MainRouter';
import GlobalStyles from './Style/GlobalStyles';
import HeaderContainer from './Containers/HeaderContainer';
import { getUsersAsync } from './Modules/UserReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
    console.log('hi');
  }, [dispatch]);

  return (
    <>
      <HeaderContainer />
      <MainRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
