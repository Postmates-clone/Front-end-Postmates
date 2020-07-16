import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainRouter from './Router/MainRouter';
import GlobalStyles from './Style/GlobalStyles';
import HeaderContainer from './Containers/HeaderContainer';
import { getUsersAsync } from './Modules/UserReducer';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <div>
      <HeaderContainer />
      <MainRouter />
      <GlobalStyles />
    </div>
  );
}

// export default App;
export default React.memo(App);
