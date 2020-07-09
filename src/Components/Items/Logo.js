import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.h1`
  width: 13%;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 72px;
`;
const Logo = () => {
  return <LogoStyle>Postmates</LogoStyle>;
};
export default Logo;
