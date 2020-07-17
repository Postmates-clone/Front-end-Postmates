/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Feed from '../Components/Pages/Feed';

// eslint-disable-next-line no-unused-vars
import { getOrderBy, getFavorite, getInFast } from '../Modules/FeedReducer';
import { setPage } from '../Modules/MainReducer';

const FeedContainer = () => {
  const { orderby, favorite, getinfast } = useSelector((state) => ({
    // nearby: state.Feed.nearby,
    orderby: state.Feed.orderby,
    favorite: state.Feed.favorite,
    getinfast: state.Feed.getinfast,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const lat = localStorage.getItem('location-lat');
    const lng = localStorage.getItem('location-lng');
    dispatch(setPage('feed'));
    dispatch(getOrderBy(lat, lng));
    dispatch(getFavorite(lat, lng));
    dispatch(getInFast(lat, lng));
    // dispatch(getNearBy(1, lat, lng));
    // console.log(lat, lng);
    window.scrollTo({ top: 0 });
  }, [dispatch]);

  // if (nearby.loading) return <div>로딩중...</div>;
  // if (nearby.error) return <div>에러 발생!</div>;

  if (orderby.loading) return <div>로딩중...</div>;
  if (orderby.error) return <div>에러 발생!</div>;

  if (favorite.loading) return <div>로딩중...</div>;
  if (favorite.error) return <div>에러 발생!</div>;

  if (getinfast.loading) return <div>로딩중...</div>;
  if (getinfast.error) return <div>에러 발생!</div>;

  if (!orderby.data && !favorite.data) {
    return null;
  }
  // console.log(nearby.data);
  // console.log(orderby);
  return (
    <Feed
      // nearby={nearby.data}
      orderby={orderby.data.results}
      favorite={favorite.data.results}
      getinfast={getinfast.data.results}
    />
  );
};

export default React.memo(FeedContainer);
