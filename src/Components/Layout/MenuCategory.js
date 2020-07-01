import React from 'react';
import styled from 'styled-components';
import MenuCategoryTitle from '../Items/MenuCategoryTitle';
import MenuItem from '../Items/MenuItem';
import Media from '../../Style/Media';

const StoreListBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

const MenuCategory = ({ key, category, list }) => {
  return (
    <li key={key}>
      <MenuCategoryTitle category={category} />
      <StoreListBlock>
        {list.map((item) => (
          <MenuItem item={item} />
        ))}
      </StoreListBlock>
    </li>
  );
};

export default MenuCategory;
