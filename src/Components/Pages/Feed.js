/* eslint-disable react/prop-types */
// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../Layout/FeedHeader';
import SubBanner from '../Layout/SubBanner';
import SubHeader from '../Layout/SubHeader';
import FeedWrapper from '../Layout/Feed';

const FeedWrapperBlock = styled.div`
  width: 100%;

  background-color: #f4f4f4;
`;

const Feed = ({ nearby, orderby, favorite, getinfast }) => {
  // console.log(nearby.data);
  // console.log(orderby.data);
  // console.log(favorite.data);
  // console.log(getinfast.data);

  return (
    <FeedWrapperBlock>
      <FeedHeader />
      <SubBanner />
      <SubHeader />
      <FeedWrapper />
      <div>
        <ul>
          {favorite.data.map((store) => (
            <li key={store.id}>
              {store.name} - <strong>{store.food_type}</strong>
            </li>
          ))}
        </ul>
        <ul>
          {orderby.data.map((store) => (
            <li key={store.id}>
              {store.name} - <strong>{store.food_type}</strong>
            </li>
          ))}
        </ul>
        <ul>
          {getinfast.data.map((store) => (
            <li key={store.id}>
              {store.name} - <strong>{store.food_type}</strong>
            </li>
          ))}
        </ul>
        <ul>
          {nearby.data.map((store) => (
            <li key={store.id}>
              {store.name} - <strong>{store.food_type}</strong>
            </li>
          ))}
        </ul>
      </div>
    </FeedWrapperBlock>
  );
};

export default Feed;
