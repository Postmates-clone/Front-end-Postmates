import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../Containers/MainContainer';
import FeedContainer from '../Containers/FeedContainer';
import ItemContainer from '../Containers/ItemContainer';
import DevComponent from '../Dev/DevComponent';
import DevUserComponent from '../Dev/DevUserComponent';
import DesignSystem from '../Style/DesignSystem';
import UserContainer from '../Containers/UserContainer';
import CheckoutContainer from '../Containers/CheckoutContainer';
import OrderHistory from '../Components/Pages/OrderHistory';
import Error404 from '../Components/Pages/Error404';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/feed" component={FeedContainer} />
      <Route path="/item" component={ItemContainer} />
      <Route path="/account" component={UserContainer} />
      <Route path="/orderhistory" component={OrderHistory} />
      <Route path="/checkout" component={CheckoutContainer} />
      <Route path="/dev" component={DevComponent} />
      <Route path="/devuser" component={DevUserComponent} />
      <Route path="/design" component={DesignSystem} />
      <Route component={Error404} />
    </Switch>
  );
};

export default MainRouter;
