/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Stores from '../Items/NearStores';
import { getNearBy } from '../../Modules/FeedReducer';
import { DevApi } from '../../Dev/DevApi';
import Media from '../../Style/Media';

const StoreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
/* 
  ${Media.desktop`
  li {
    margin: 35px 0 0 35px;
  }
  li:nth-of-type(3n + 1) {
    margin-left: 0;
  }
  `}

  ${Media.tablet`

  `}
  
  ${Media.mobile`

  `} */
`;

const InfinityScroll = () => {
  const [state, setState] = useState({
    loading: false,
    next: 1,
    data: [],
    error: null,
  });

  const fetchItems = async () => {
    setState((prev) => ({ ...prev, loading: true }));
    const lat = localStorage.getItem('location-lat');
    const lng = localStorage.getItem('location-lng');
    // console.log(state.next, lat, lng, 'nearby');
    const { data } = await DevApi.getNearBy(state.next, lat, lng);

    setState((prev) => ({
      ...prev,
      loading: false,
      next: prev.next + 1,
      data: [...prev.data, ...data.results],
      error: null,
    }));
    // console.log('next', state.next);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();
      observer.observe(entry.target);
    }
  };

  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(target);
    }
    return () => {
      return observer && observer.disconnect();
    };
  }, [target, state.next]);

  const { loading, data, error } = state;

  if (!data) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <StoreList>
        {data.map((store) => (
          <Stores
            name={store.name}
            image={store.store_img}
            fee={store.delivery_fee}
            time={store.estimated_prep_time}
            url={store.url}
          />
        ))}
      </StoreList>
      <div ref={setTarget} className="Loading">
        {loading && 'Loading...'}
      </div>
    </>
  );
};

export default React.memo(InfinityScroll);
