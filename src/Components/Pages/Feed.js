import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Api from '../../Utils/feedApi';
import {
  FEED_SET_LOADING,
  FEED_HAS_ERROR,
  FEED_SET_DATA,
} from '../../Modules/feedReducer';
import Stores from '../Items/Stores';

const FeedPage = () => {
  const status = useSelector(({ Feed }) => Feed.status);
  const stores = useSelector(({ Feed }) => Feed.stores);

  const dispatch = useDispatch();

  useEffect(() => {
    const getFeedData = async () => {
      dispatch({ type: FEED_SET_LOADING });

      try {
        const { data } = await Api.get('/place');
        console.log('SET_DATA', data);
        dispatch({ type: FEED_SET_DATA, payload: data });
      } catch (e) {
        dispatch({ type: FEED_HAS_ERROR });
      }
    };
    getFeedData();
  }, [dispatch]);

  return (
    <div>
      <h1>Feed page</h1>
      {status === 'loading' && <h1>now loading...</h1>}
      {status === 'error' && <h1>has error...</h1>}
      {status === 'completed' &&
        stores.map((store) => <Stores key={store.id} store={store} />)}
    </div>
  );
};

export default FeedPage;
