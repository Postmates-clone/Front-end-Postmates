import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginBtn } from '../../Style/BasicBtn';
import LoginPopUp from './LoginPopUp';
import SignUpPopUp from './SignUpPopUp';

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
const Member = () => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openLogInPopUp = () => setOpenLogIn(!openLogIn);
  const openSignUpPopUp = () => setOpenSignUp(!openSignUp);
  return (
    <MemberWrap>
      <LoginBtn active text="LOG IN" onClick={openLogInPopUp} />
      <LoginBtn text="SIGN UP" onClick={openSignUpPopUp} />
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
