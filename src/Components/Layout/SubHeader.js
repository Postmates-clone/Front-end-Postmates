// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import BreadCrumbs from '../Items/BreadCrumbs';
import SubLocation from '../Items/SubLocation';
import MenuCategories from '../Items/MenuCategories';
import SearchItems from '../Items/SearchItems';
import Cart from '../Items/Cart';

const SubHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'Postmates Std';
  position: sticky;
  top: 0;
  background-color: rgb(255, 255, 255);

  ${Media.desktop`
  height: 69px;

  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  
  `}
  ${Media.tablet`
  height: 69px;
  padding: 0 24px;

  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  `}
  ${Media.mobile`
  height: 55px;
  padding: 20px 24px;
  box-sizing: content-box;
  `}

  .wrap-subheader-item {
    display: flex;
    align-items: center;
    ${Media.desktop`
      width: 1024px;
    `}
    ${Media.tablet`
      width: 100%;
    `}
    ${Media.mobile`
      width: 100%;
    `}
  }
`;

const Bulkhead = styled.div`
  height: 30px;
  width: 1px;
  margin-right: 17px;
  background: rgba(217, 219, 224, 0.5);
  ${Media.mobile`
     display: none;
  `}
`;

const SubHeader = ({
  page,
  menuList,
  handleClickCategories,
  isOpenCategories,
  handleClickScrollTo,
}) => {
  return (
    <SubHeaderBlock>
      <div className="wrap-subheader-item">
        <BreadCrumbs />
        <Bulkhead />
        <SubLocation />
        {page === 'item' && <Bulkhead />}
        {page === 'item' && (
          <MenuCategories
            menuList={menuList}
            handleClickCategories={handleClickCategories}
            isOpenCategories={isOpenCategories}
            handleClickScrollTo={handleClickScrollTo}
          />
        )}
        {page === 'item' && <Bulkhead />}
        {page === 'item' && <SearchItems />}
        {page === 'item' && <Bulkhead />}
        {page === 'item' && <Cart />}
      </div>
    </SubHeaderBlock>
  );
};

export default SubHeader;
