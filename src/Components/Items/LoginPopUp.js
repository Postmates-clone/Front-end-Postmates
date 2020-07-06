import React from 'react';
import styled from 'styled-components';
import PopUp from '../../Style/PopUp';

const LoginPopUpBlock = styled.div``;
const LoginForm = styled.form`
  padding: 30px;
  text-align: center;
`;

const LoginPopUp = ({ setState, openState }) => {
  return (
    <LoginPopUpBlock>
      <PopUp
        width="435px"
        height="512px"
        setState={setState}
        openState={openState}
      >
        <LoginForm>Login</LoginForm>
      </PopUp>
    </LoginPopUpBlock>
  );
};

export default LoginPopUp;
