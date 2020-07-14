// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Items/MainMenu';
import Logo from '../Items/Logo';
import Member from '../Items/Member';
import Search from '../Items/Search';
import Media from '../../Style/Media';

const MainHeaderBlock = styled.div`
  width: 100%;

  background: #ffdf18;
  line-height: 72px;

  &.mainHeader-feed {
    position: sticky;
    background: #fed928;
  }
  &.mainHeader-item {
    /* position: sticky; */
    background: #fff;
  }
  top: 0px;
  z-index: 101;
`;

const MainHeaderWrapper = styled.div`
  display: flex;
  min-height: 72px;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  &
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

const MainHeader = ({ page }) => {
  return (
    <MainHeaderBlock className={`mainHeader-${page}`}>
      <MainHeaderWrapper>
        <Logo />
        {page !== 'main' && <Search />}
        {page !== 'main' && <MainMenu />}
        <Member />
      </MainHeaderWrapper>
    </MainHeaderBlock>
  );
};

export default MainHeader;
