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

  ${Media.desktop`
  height: 69px;
  `}
  ${Media.tablet`
  height: 69px;
  padding: 0 24px;
  `}
  ${Media.mobile`
  height: 55px;
  padding: 20px 24px;
  box-sizing: content-box;
  `}

  .wrap-subheader-item {
    display: flex;
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

const SubHeader = () => {
  return (
    <SubHeaderBlock>
      <div className="wrap-subheader-item">
        <BreadCrumbs />
        <SubLocation />
        <MenuCategories />
        <SearchItems />
        <Cart />
      </div>
    </SubHeaderBlock>
  );
};

export default SubHeader;
