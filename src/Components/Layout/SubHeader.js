// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import BreadCrumbs from '../Items/BreadCrumbs';
import SubLocation from '../Items/SubLocation';
import MenuCategories from '../Items/MenuCategories';

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
  return (
    <SubHeaderBlock>
      <BreadCrumbs />
      <SubLocation />
      <MenuCategories />
    </SubHeaderBlock>
  );
};

export default SubHeader;
