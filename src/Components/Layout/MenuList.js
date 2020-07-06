import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FavoritesCategory from './FavoritesCategory';
import MenuCategory from './MenuCategory';
import Media from '../../Style/Media';
import { initCategoryRef, setCategoryRef } from '../../Modules/RefReducer';

const StoreBlock = styled.div`
  max-width: 1024px;

  ${Media.tablet`
  padding: 0 24px;
  `}
  ${Media.mobile`
  padding: 0 24px;
  `}
`;

const MenuList = ({ storeData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCategoryRef());
  }, [dispatch]);
  return (
    <StoreBlock>
      <FavoritesCategory />
      <ul>
        {storeData.menu.map((item) => (
          <MenuCategory
            key={`itemKey-${item.id}`}
            itemKey={item.id}
            category={item.category}
            list={item.list}
            setCategoryRef={setCategoryRef}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </StoreBlock>
  );
};

export default MenuList;
