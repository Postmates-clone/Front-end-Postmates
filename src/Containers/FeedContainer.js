/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Feed from '../Components/Pages/Feed';

// eslint-disable-next-line no-unused-vars
import {
  getNearBy,
  getOrderBy,
  getFavorite,
  getInFast,
} from '../Modules/FeedReducer';
import { setPage } from '../Modules/MainReducer';

const Feed = lazy(() => import('../Components/Pages/Feed'));

const FeedContainer = () => {
  const { nearby, orderby, favorite, getinfast } = useSelector((state) => ({
    nearby: state.Feed.nearby,
    orderby: state.Feed.orderby,
    favorite: state.Feed.favorite,
    getinfast: state.Feed.getinfast,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage('feed'));
    dispatch(getOrderBy());
    dispatch(getFavorite());
    // dispatch(getInFast());
    dispatch(getNearBy('2'));
  }, [dispatch]);

  if (nearby.loading) return <div>로딩중...</div>;
  if (nearby.error) return <div>에러 발생!</div>;

  if (orderby.loading) return <div>로딩중...</div>;
  if (orderby.error) return <div>에러 발생!</div>;

  if (favorite.loading) return <div>로딩중...</div>;
  if (favorite.error) return <div>에러 발생!</div>;

  // if (getinfast.loading) return <div>로딩중...</div>;
  // if (getinfast.error) return <div>에러 발생!</div>;

  if (!nearby.data && !orderby.data && !favorite.data) {
    return null;
  }
  // console.log(nearby.data);
  // console.log(orderby);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Feed
          nearby={nearby.data}
          orderby={orderby.data.results}
          favorite={favorite.data.results}
          // getinfast={getinfast.data.results}
        />
      </Suspense>
    </div>
  );
};

export default FeedContainer;
