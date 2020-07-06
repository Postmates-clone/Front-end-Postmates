import React from 'react';
import styled from 'styled-components';
import MenuCategoriesList from './MenuCategoriesList';
import Media from '../../Style/Media';
import { arrowIconLarge } from '../../Style/IconStyles';

const MenuCategoriesBlock = styled.div`
  padding-right: 24px;
  position: relative;
  cursor: pointer;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 175px;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 400;
  }
  ${Media.tablet`
    display: none;
  `}
`;

const MenuCategories = ({
  menuList,
  handleClickCategories,
  isOpenCategories,
  handleClickScrollTo,
}) => {
  return (
    <MenuCategoriesBlock>
      <button type="button" onClick={handleClickCategories}>
        <span>Category</span>
        {arrowIconLarge}
      </button>
      {!isOpenCategories ? (
        ''
      ) : (
        <MenuCategoriesList
          menuList={menuList}
          handleClickScrollTo={handleClickScrollTo}
        />
      )}
    </MenuCategoriesBlock>
  );
};

export default MenuCategories;
