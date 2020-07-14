import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { LoginBtn } from '../../Style/BasicBtn';
import LoginPopUp from './LoginPopUp';
import SignUpPopUp from './SignUpPopUp';
import { CountBlock } from './Cart';

const MemberWrap = styled.div`
  display: flex;
  min-width: 185px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0 15px;
  }
`;

const LoginCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CartText = styled.div`
  max-width: 80%;
`;

const Member = () => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const cart = useSelector((state) => state.Cart.cart);

  const userInfo = useSelector((state) => state.User.userInfo);

  const openLogInPopUp = () => setOpenLogIn(!openLogIn);
  const openSignUpPopUp = () => setOpenSignUp(!openSignUp);

  return (
    <MemberWrap>
      {!userInfo.email && (
        <>
          <LoginBtn active text="LOG IN" onClick={openLogInPopUp} />
          <LoginBtn text="SIGN UP" onClick={openSignUpPopUp} />
        </>
      )}
      {userInfo.email && (
        <>
          <LoginCart>
            <div>hi</div>
            <CountBlock>{cart.map((item) => item.count)}</CountBlock>
            <CartText>Cart</CartText>
            <div>화살표</div>
          </LoginCart>
        </>
      )}
      {openLogIn && (
        <LoginPopUp setState={setOpenLogIn} openState={openLogIn} />
      )}
      {openSignUp && (
        <SignUpPopUp setState={setOpenSignUp} openState={openSignUp} />
      )}
    </MemberWrap>
  );
};
export default Member;
