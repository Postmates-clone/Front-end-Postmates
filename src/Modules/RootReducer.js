import { CombineReducers } from 'redux';
import { FeedReducer } from './FeedReducer';
import { ItemReducer } from './ItemReducer';
import { UserReducer } from './UserReducer';

const RootReducer = CombineReducers({
  Feed: FeedReducer,
  Item: ItemReducer,
  User: UserReducer,
});

// const sotre = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
