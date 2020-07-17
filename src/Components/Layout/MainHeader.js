// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Items/MainMenu';
import Logo from '../Items/Logo';
import Member from '../Items/Member';
import Search from '../Items/Search';
import Media from '../../Style/Media';
import { searchIconDeep } from '../../Style/IconStyles';

const MainHeaderBlock = styled.div`
  width: 100%;
  background: #ffdf18;
  line-height: 72px;

  &.mainHeader-feed {
    position: sticky;
    background: #fed928;
  }
  &.mainHeader-item {
    position: sticky;
    background: #fff;
  }
  &.mainHeader-checkout {
    position: sticky;
    background: #fff;
  }
  &.mainHeader-error {
    position: sticky;
    background: rgb(251, 208, 69);
  }
  &.mainHeader-order {
    position: sticky;
    background: #fff;
  }
  &.mainHeader-account {
    position: sticky;
    background: #fff;
  }
  top: 0px;
  z-index: 400;
`;

const MainHeaderWrapper = styled.div`
  display: flex;
  /* min-height: 72px; */
  max-height: 72px;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
    ${Media.desktop`
    width:1024px;
    `}
    ${Media.tablet`
    max-width:1020px;
    padding: 0 54px 0 54px;
    margin:0;
    `}
    ${Media.mobile`
      margin: 0 25px 0 25px;
      padding:0;
    `}
`;
const IconWrap = styled.div`
  ${Media.desktop`
  display:none;
    `}
  ${Media.tablet`
    display:on;
    margin: 0 16px 0 0;
    cursor: pointer;
    `}
`;
const MainResponsiveWrap = styled.div`
  ${Media.desktop`
  display:flex;
  width:auto;
  justify-content: space-between;
  align-items: center;
    `}
  ${Media.tablet`
  display: flex;
  width: auto;
  height: 72px;
    `}
`;
const MainHeader = ({ page }) => {
  return (
    <MainHeaderBlock className={`mainHeader-${page}`}>
      <MainHeaderWrapper>
        <Logo page={page} />
        <MainResponsiveWrap>
          {page === 'feed' && <Search />}
          {page === 'item' && <Search />}
          {page === 'checkout' && <Search />}
          {page === 'feed' && <MainMenu />}
          {page === 'item' && <MainMenu />}
          {page === 'checkout' && <MainMenu />}
          <IconWrap>{page === 'feed' && searchIconDeep}</IconWrap>
          <IconWrap>{page === 'item' && searchIconDeep}</IconWrap>
          <IconWrap>{page === 'checkout' && searchIconDeep}</IconWrap>
          <Member />
        </MainResponsiveWrap>
      </MainHeaderWrapper>
    </MainHeaderBlock>
  );
};

export default MainHeader;
