import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../Containers/MainContainer';
import FeedContainer from '../Containers/FeedContainer';
import ItemContainer from '../Containers/ItemContainer';
import DevComponent from '../Dev/DevComponent';
import DevUserComponent from '../Dev/DevUserComponent';
import DesignSystem from '../Style/DesignSystem';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/feed" component={FeedContainer} />
      <Route path="/item" component={ItemContainer} />
      <Route path="/dev" component={DevComponent} />
      <Route path="/devuser" component={DevUserComponent} />
      <Route path="/design" component={DesignSystem} />
    </Switch>
  );
};

export default MainRouter;
