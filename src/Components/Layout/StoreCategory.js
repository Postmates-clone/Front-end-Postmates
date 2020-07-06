/* eslint-disable react/prop-types */
// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import Slider from '../../lib/Slider';
import CategoryTitle from '../Items/CategoryTitle';
import Stores from '../Items/Stores';

const StoreCategoryBlock = styled.div`
  margin: 0 0 60px 0;
`;

const StoreListBlock = styled.div`
  position: relative;
`;

const StoreList = styled.ul`
  display: flex;
`;

const StoreCategory = ({ category, title, info, data }) => {
  // console.log(data.length);
  return (
    <StoreCategoryBlock>
      <CategoryTitle
        title={title}
        info={info}
        view={data.length}
        category={category}
      />
      <StoreListBlock>
        {category === 'nearby' ? (
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
        ) : (
          <Slider list={data} category={category}>
            {data.map((store) => (
              <Stores
                id={store.id}
                name={store.name}
                image={store.store_img}
                fee={store.delivery_fee_badge}
                time={store.estimated_prep_time}
              />
            ))}
          </Slider>
        )}
      </StoreListBlock>
    </StoreCategoryBlock>
  );
};

export default StoreCategory;
