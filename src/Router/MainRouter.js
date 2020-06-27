import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../Containers/MainContainer';
import FeedContainer from '../Containers/FeedContainer';
import ItemContainer from '../Containers/ItemContainer';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/feed" component={FeedContainer} />
      <Route path="/item" component={ItemContainer} />
    </Switch>
  );
};

export default MainRouter;
