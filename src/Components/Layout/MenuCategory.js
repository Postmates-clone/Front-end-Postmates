import React, { useRef, useEffect } from 'react';
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

const MenuCategory = ({ itemKey, category, list }) => {
  const categoryRef = useRef();
  useEffect(() => {
    console.log(categoryRef);
  }, [categoryRef]);
  return (
    <li key={`itemkey-${itemKey}`} id={`item-${itemKey}`} ref={categoryRef}>
      <MenuCategoryTitle category={category} categoryRef={categoryRef} />
      <StoreListBlock>
        {list.map((item) => (
          <MenuItem item={item} />
        ))}
      </StoreListBlock>
    </li>
  );
};

export default MenuCategory;
