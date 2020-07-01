// eslint-disable-next-line import/no-unresolved
import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';
import ItemReducer from './ItemReducer';
import UserReducer from './UserReducer';

const RootReducer = combineReducers({
  Feed: FeedReducer,
  Item: ItemReducer,
  User: UserReducer,
});

// const store = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
