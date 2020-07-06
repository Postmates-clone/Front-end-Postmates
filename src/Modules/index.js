/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { combineReducers } from 'redux';
import MainReducer from './MainReducer';
import FeedReducer from './FeedReducer';
import ItemReducer from './ItemReducer';
import UserReducer from './UserReducer';
import RefReducer from './RefReducer';
import CartReducer from './CartReducer';

const RootReducer = combineReducers({
  Main: MainReducer,
  Feed: FeedReducer,
  Item: ItemReducer,
  User: UserReducer,
  Ref: RefReducer,
  Cart: CartReducer,
});

// const store = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
