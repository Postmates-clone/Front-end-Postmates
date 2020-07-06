import React from 'react';
import styled from 'styled-components';
import PopUp from '../../Style/PopUp';

const LoginPopUpBlock = styled.div``;
const LoginForm = styled.form`
  padding: 48px 36px 0 0;

  color: rgb(45, 49, 56);
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1.16px;
  }
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
        <LoginForm>
          <h3>Log in</h3>
          <em>Enter your</em>
        </LoginForm>
      </PopUp>
    </LoginPopUpBlock>
  );
};

export default LoginPopUp;
