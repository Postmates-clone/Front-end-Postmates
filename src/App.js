import React from 'react';
import MainRouter from './Router/MainRouter';
import GlobalStyles from './Style/GlobalStyles';
import HeaderContainer from './Containers/HeaderContainer';

function App() {
  return (
    <>
      <HeaderContainer />
      <MainRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
