// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const SubHeaderBlock = styled.div`
  height: 50px;
  ${Media.desktop`
  background-color: #0079FA;
  `}
  ${Media.tablet`
  background-color: #A8FA00;
  `}
  ${Media.mobile`
  background-color: #F79700;
  `}
`;

const SubHeader = () => {
  return <SubHeaderBlock>Sub Header</SubHeaderBlock>;
};

export default SubHeader;
