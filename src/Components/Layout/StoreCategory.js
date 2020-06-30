/* eslint-disable react/prop-types */
// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Items/CategoryTitle';
import CategoryInfo from '../Items/CategoryInfo';
import Stores from '../Items/Stores';

const StoreList = styled.ul`
  width: 100%;

  background-color: #f4f4f4;
`;

const StoreCategory = ({ data, title, info }) => {
  return (
    <div>
      <CategoryTitle title={title} />
      <CategoryInfo info={info} />
      <StoreList>
        {data.map(() => (
          <Stores data={data} />
        ))}
      </StoreList>
    </div>
  );
};

export default StoreCategory;
