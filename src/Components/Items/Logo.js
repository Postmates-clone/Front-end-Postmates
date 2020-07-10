import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.h1`
  width: auto;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 72px;
  cursor: pointer;
`;
const Logo = () => {
  return <LogoStyle>Postmates</LogoStyle>;
};
export default Logo;
