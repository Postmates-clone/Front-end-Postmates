import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  /* Header */

  position: absolute;
  width: 98px;
  height: 35px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;

  color: #000000;
`;
const Logo = styled.a`
  /* Logo */

  position: absolute;
  width: 48px;
  height: 50px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;

  color: #000000;
`;
const Login = styled.button`
  /* Login */
  display: flex;
  width: 53px;
  height: 50px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;

  color: #000000;
`;
const SignUp = styled.button`
  display: flex;
  width: 91px;
  height: 50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;

  color: #000000;
`;
const MainHeader = () => {
  return (
    <div>
      <Header>
        <Logo>Postmates</Logo>
        <Login>LOG IN</Login>
        <SignUp>SIGN UP</SignUp>
      </Header>
    </div>
  );
};
export default MainHeader;
