/* eslint-disable react/prop-types */
// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

import FeedHeader from '../Layout/FeedHeader';
import SubBanner from '../Layout/SubBanner';
import SubHeader from '../Layout/SubHeader';
import EventSection from '../Layout/EventSection';
import StoreCategory from '../Layout/StoreCategory';
import CategoryList from '../Layout/CategoryList';

const FeedWrapperBlock = styled.div`
  width: 100%;

  /* background-color: #f4f4f4; */
`;
const FeedWrapper = styled.div`

  margin: 0 auto;

  /* background-color: #ccc; */

  ${Media.desktop`
  width: 1024px;
  `}

  ${Media.tablet`
  width: 100%;
  `}

  ${Media.mobile`
  width: 100%;
  `}
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

      <FeedWrapper>
        <EventSection />

        <StoreCategory
          data={getinfast.data}
          title="Get in Fast"
          info="get in fast category"
        />
        <StoreCategory
          data={favorite.data}
          title="Favorite"
          info="favorite category"
        />
        <StoreCategory
          data={orderby.data}
          title="Order By"
          info="order by category"
        />

        <CategoryList />

        <StoreCategory
          data={nearby.data}
          title="Near By"
          info="near by category"
        />
      </FeedWrapper>

      {/*
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
      </div> */}
    </FeedWrapperBlock>
  );
};

export default Feed;
