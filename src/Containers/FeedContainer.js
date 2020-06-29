/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedPage from '../Components/Pages/Feed';
import { getStores } from '../Modules/FeedReducer';

const FeedContainer = () => {
  const { data, loading, error } = useSelector((state) => state.Feed.stores);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getStores);
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <FeedPage stores={data} />;
};

export default FeedContainer;
