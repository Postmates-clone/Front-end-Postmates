import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoStyle = styled.h1`
  width: auto;
  margin-right: 24px;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -1px;
  cursor: pointer;
`;
const Logo = ({ page }) => {
  return (
    <LogoStyle>
      {page === 'main' ? (
        <Link to="/">Postmates</Link>
      ) : (
        <Link to="/feed">Postmates</Link>
      )}
    </LogoStyle>
  );
};
export default Logo;
