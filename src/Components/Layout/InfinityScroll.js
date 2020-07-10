/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Stores from '../Items/Stores';
import { getNearBy } from '../../Modules/FeedReducer';

const StoreList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 35px 0 0 35px;
  }
  li:nth-of-type(3n + 1) {
    margin-left: 0;
  }
`;

const InfinityScroll = ({ data, dataAll }) => {
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // return window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect');
  //   return console.log('return');
  // }, [data]);

  const { nearby } = useSelector((state) => ({
    nearby: state.Feed.nearby,
  }));

  const dispatch = useDispatch();
  // console.log(data);

  // const deleteURL = '54.180.102.1/media/';
  // const deleteURL2 =
  //   'http://54.180.102.1/api/v1/feed/nearby/?city=San+Francisco&page=';

  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    // console.log(innerHeight);
    // console.log(scrollHeight);

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 300) {
      console.log('1111');
      // if (dataAll === undefined) return null;
      // console.log(dataAll.next.replace(deleteURL2, ''));
      // console.log(dataAll);
      const page = dataAll.next;
      dispatch(getNearBy(page));
    }
  };

  return (
    <>
      <StoreList>
        {data.map((store) => (
          <Stores
            key={store.id}
            id={store.id}
            name={store.name}
            image={store.store_img}
            fee={store.delivery_fee}
            time={store.estimated_prep_time}
            url={store.url}
          />
        ))}
      </StoreList>
    </>
  );
};

export default InfinityScroll;
