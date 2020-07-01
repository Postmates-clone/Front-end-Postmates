/* eslint-disable react/prop-types */
// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Items/CategoryTitle';

import Stores from '../Items/Stores';

const StoreList = styled.ul`
  width: 100%;

  background-color: #f4f4f4;
`;

const StoreCategory = ({ data, title, info }) => {
  // console.log(data);
  return (
    <div>
      <CategoryTitle title={title} info={info} />
      <StoreList>
        {data.map(() => (
          <Stores data={data} />
        ))}
      </StoreList>
    </div>
  );
};

export default StoreCategory;
