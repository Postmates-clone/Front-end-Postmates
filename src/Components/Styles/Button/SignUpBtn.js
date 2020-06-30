import React from 'react';
import styled from 'styled-components';

const StyleSignUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 0.75rem;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  color: rgb(255, 255, 255);
  background-color: rgb(45, 49, 56);
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  white-space: nowrap;
  min-width: 86px;
  margin-right: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(45, 49, 56, 0.15);
  border-image: initial;
  border-radius: 16px;
  transition: background-color 0.1s ease-in-out 0s;
`;
function SignUpBtn() {
  return <StyleSignUp>signup</StyleSignUp>;
}
export default SignUpBtn;
