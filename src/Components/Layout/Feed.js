// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import EventSection from './EventSection';
import StoreCategory from './StoreCategory';
import CategoryList from './CategoryList';

const FeedBlock = styled.div`
  width: 100%;

  background-color: #f4f4f4;
`;

const FeedWrapper = () => {
  return (
    <FeedBlock>
      <EventSection />
      <StoreCategory />
      <CategoryList />
    </FeedBlock>
  );
};

export default FeedWrapper;
