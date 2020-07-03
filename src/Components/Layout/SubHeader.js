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
  
  ${Media.desktop`
  height: 69px;
  background-color: #0079FA;
  `}
  ${Media.tablet`
  height: 69px;
  background-color: #A8FA00;
  `}
  ${Media.mobile`
  height: 55px;
  padding: 20px 0;
  box-sizing: content-box;
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
