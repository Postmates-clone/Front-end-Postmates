/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Feed from '../Components/Pages/Feed';
// eslint-disable-next-line no-unused-vars
import {
  getNearBy,
  getOrderBy,
  getFavorite,
  getInFast,
} from '../Modules/FeedReducer';
import { setPage } from '../Modules/MainReducer';

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
    dispatch(getNearBy());
    dispatch(getOrderBy());
    dispatch(getFavorite());
    dispatch(getInFast());
  }, [dispatch]);

  if (nearby.loading) return <div>로딩중...</div>;
  if (nearby.error) return <div>에러 발생!</div>;

  if (orderby.loading) return <div>로딩중...</div>;
  if (orderby.error) return <div>에러 발생!</div>;

  if (favorite.loading) return <div>로딩중...</div>;
  if (favorite.error) return <div>에러 발생!</div>;

  if (getinfast.loading) return <div>로딩중...</div>;
  if (getinfast.error) return <div>에러 발생!</div>;

  if (!nearby.data && !orderby.data && !favorite.data && !getinfast.data) {
    return null;
  }

  return (
    <Feed
      nearby={nearby.data}
      orderby={orderby.data}
      favorite={favorite.data}
      getinfast={getinfast.data}
    />
  );
};

export default FeedContainer;
