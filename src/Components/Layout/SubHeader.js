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
  height: 50px;
  ${Media.desktop`
  background-color: #0079FA;
  `}
  ${Media.tablet`
  background-color: #A8FA00;
  `}
  ${Media.mobile`
  background-color: #F79700;
  `}

  .wrap-subheader-item {
    display: flex;
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
