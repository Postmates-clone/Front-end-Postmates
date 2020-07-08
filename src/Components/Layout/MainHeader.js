// 0701 seungeun
import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginBtn } from '../../Style/BasicBtn';
import LoginPopUp from '../Items/LoginPopUp';
import SignUpPopUp from '../Items/SignUpPopUp';

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 72px;
  background: #ffdf18;

  &.mainHeader-feed {
    position: sticky;
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

const Logo = styled.h1`
  width: 20%;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: -1px;

  line-height: 72px;
`;

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
        <Logo>Postmates</Logo>
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
