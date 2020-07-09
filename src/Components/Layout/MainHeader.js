// 0701 seungeun
import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginBtn } from '../../Style/BasicBtn';
import LoginPopUp from '../Items/LoginPopUp';
import SignUpPopUp from '../Items/SignUpPopUp';
import Search from '../Items/Search';
import MainMenu from '../Items/MainMenu';
import Logo from '../Items/Logo';

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

// const Logo = styled.h1`
//   width: 13%;
//   font-size: 24px;
//   font-weight: 400;
//   letter-spacing: -1px;
//   line-height: 72px;
// `;

const Member = styled.div`
  width: 20%;
`;

const MainHeader = ({ page }) => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openLogInPopUp = () => setOpenLogIn(!openLogIn);
  const openSignUpPopUp = () => setOpenSignUp(!openSignUp);

  return (
    <MainHeaderBlock className={`mainHeader-${page}`}>
      <MainHeaderWrapper>
        <Logo />
        {page !== 'main' && <Search />}
        {page !== 'main' && <MainMenu />}
        <Member>
          <LoginBtn active text="LOG IN" onClick={openLogInPopUp} />
          <LoginBtn active={false} text="SIGN UP" onClick={openSignUpPopUp} />
          {openLogIn && (
            <LoginPopUp setState={setOpenLogIn} openState={openLogIn} />
          )}
          {openSignUp && (
            <SignUpPopUp setState={setOpenSignUp} openState={openSignUp} />
          )}
        </Member>
      </MainHeaderWrapper>
    </MainHeaderBlock>
  );
};

export default MainHeader;
