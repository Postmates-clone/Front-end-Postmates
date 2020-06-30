import React from 'react';
import styled from 'styled-components';

const StyelLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 0.75rem;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: #000;
  background-color: transparent;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  min-width: 86px;
  margin-right: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

function LogInBtn() {
  return <StyelLogin />;
}
export default LogInBtn;
