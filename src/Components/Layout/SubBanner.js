// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const SubBannerBlock = styled.div`
  &.feed {
    ${Media.desktop`
    height: 308px;
    `}
    ${Media.tablet`
    height: 248px;
    `}
    ${Media.mobile`
    height: 248px;
    `}
  }
  &.item {
    ${Media.desktop`
      height: 260px;
    `}
    ${Media.tablet`
      height: 130px;
    `}
    ${Media.mobile`
      height: 130px;
    `}
  }
  background: no-repeat center url(${(props) => props.background});
  background-size: cover;
`;

const SubBanner = ({ page, getBackground }) => {
  return (
    <SubBannerBlock background={() => getBackground()} className={page}>
      SubBanner
    </SubBannerBlock>
  );
};

export default SubBanner;
