import { combineReducers } from 'redux';
import feedReducer from './FeedReducer';
import { ItemReducer } from './ItemReducer';
import { UserReducer } from './UserReducer';

const RootReducer = combineReducers({
  Feed: feedReducer,
  Item: ItemReducer,
  User: UserReducer,
});

// const sotre = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
