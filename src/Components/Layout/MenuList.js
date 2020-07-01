import React from 'react';
import styled from 'styled-components';
import FavoritesCategory from './FavoritesCategory';
import MenuCategory from './MenuCategory';
import Media from '../../Style/Media';

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
  return (
    <StoreBlock>
      <FavoritesCategory />
      <ul>
        {storeData.menu.map((item) => (
          <MenuCategory
            key={item.id}
            category={item.category}
            list={item.list}
          />
        ))}
      </ul>
    </StoreBlock>
  );
};

export default MenuList;
