import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../Containers/MainContainer';
import FeedPage from '../Containers/FeedContainer';
import ItemPage from '../Containers/ItemContainer';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/feed" component={FeedPage} />
      <Route path="/item" component={ItemPage} />
    </Switch>
  );
};

export default MainRouter;
