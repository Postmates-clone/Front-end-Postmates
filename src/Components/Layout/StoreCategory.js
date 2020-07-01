/* eslint-disable react/prop-types */
// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Items/CategoryTitle';

import Stores from '../Items/Stores';

const StoreList = styled.ul`
  display: flex;

  width: 100%;

  margin: 0 0 30px 0;
  /* padding: 10px; */

  /* background-color: #f4f4f4; */
`;

const StoreCategory = ({ title, info, data }) => {
  // console.log(data.length);
  return (
    <div>
      <CategoryTitle title={title} info={info} view={data.length} />
      <StoreList>
        {data.map((store) => (
          <Stores
            id={store.id}
            name={store.name}
            image={store.store_img}
            fee={store.delivery_fee_badge}
            time={store.estimated_prep_time}
          />
        ))}
      </StoreList>
    </div>
  );
};

export default StoreCategory;
