import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LogoStyle = styled.h1`
  width: auto;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -1px;
  cursor: pointer;
`;
const Logo = () => {
  return (
    <LogoStyle>
      <NavLink exact to="/Feed">
        Postmates
      </NavLink>
    </LogoStyle>
  );
};
export default Logo;
