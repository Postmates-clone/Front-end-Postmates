/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Slider from '../../lib/Slider';
import CategoryTitle from '../Items/CategoryTitle';
import Stores from '../Items/Stores';
import InfinityScroll from './InfinityScroll';

const StoreCategoryBlock = styled.div`
  margin: 0 0 60px 0;
`;

const StoreListBlock = styled.div`
  position: relative;
`;

const StoreCategory = ({ category, title, info, data, dataAll }) => {
  const deleteURL = '54.180.102.1/media/';
  // data.map((store) => console.log(store.store_img.replace(deleteURL, '')));
  // data.map((store) => console.log(store));

  if (dataAll === undefined) return null;
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
          <InfinityScroll data={data} dataAll={dataAll} />
        ) : (
          <Slider list={data} category={category}>
            {data.map((store) => (
              <Stores
                key={store.id}
                id={store.id}
                name={store.name}
                image={store.store_img.replace(deleteURL, '')}
                fee={store.delivery_fee}
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
