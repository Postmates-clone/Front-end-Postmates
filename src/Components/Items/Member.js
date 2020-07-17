import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LoginBtn } from '../../Style/BasicBtn';
import LoginPopUp from './LoginPopUp';
import SignUpPopUp from './SignUpPopUp';
import UserMenu from './UserMenu';
import Media from '../../Style/Media';
import { openCart } from '../../Modules/CartReducer';

const MemberWrap = styled.div`
  display: flex;
  min-width: 185px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0 15px;
  }
  ${Media.mobile`
  min-width:175px;
    `}
`;

const LoginCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const CountBlock = styled.div`
  text-align: center;
  letter-spacing: 1px;
  line-height: normal;
  padding: 10px;
  width: 40px;
  height: 40px;
  margin: 20px 0;
  background-color: rgb(246, 246, 248);
`;
const Arrow = styled.div`
  color: rgb(143, 149, 163);
  width: 40px;
  height: 40px;
  margin: 20px 0;
  padding: 10px 0;
  letter-spacing: 1px;
  line-height: normal;
`;

const CartText = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px 0;
  letter-spacing: 1px;
  line-height: normal;
  padding: 10px;
  cursor: pointer;
`;
const Member = () => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const cartTotalCount = useSelector((state) => state.Cart.totalCount);
  const userInfo = useSelector((state) => state.User.userInfo);

  const openLogInPopUp = () => setOpenLogIn(!openLogIn);
  const openSignUpPopUp = () => setOpenSignUp(!openSignUp);

  const dispatch = useDispatch();

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
            <UserMenu />
            <CountBlock>{cartTotalCount}</CountBlock>
            <CartText onClick={() => dispatch(openCart(true))}>Cart </CartText>
            <Arrow onClick={() => dispatch(openCart(true))}>&gt;</Arrow>
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
