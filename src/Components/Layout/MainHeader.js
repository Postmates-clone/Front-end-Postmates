// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import MainMenu from '../Items/MainMenu';
import Logo from '../Items/Logo';
import Member from '../Items/Member';
import Search from '../Items/Search';

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 72px;
  background: #ffdf18;

  &.mainHeader-feed {
    position: sticky;
    background: rgb(243, 217, 0);
  }
  &.mainHeader-item {
    position: sticky;
    background: #fff;
  }
  top: 0px;
  z-index: 101;
`;

const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
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
