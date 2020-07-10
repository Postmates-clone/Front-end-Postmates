// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const SubBannerBlock = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: -1;

  
  &.feed {
    ${Media.desktop`
    height: 308px;
    align-items: center;
    `}
    ${Media.tablet`
    height: 248px;
    align-items: center;
    padding: 0 24px;
    `}
    ${Media.mobile`
    height: 248px;
    align-items: stretch;
    padding: 24px 24px;
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

const FeedTitle = styled.div`
  font-weight: 600;
  ${Media.desktop`
    width: 1024px;
    font-size: 64px;
    letter-spacing: -3.5px;
  `}
  ${Media.tablet`
    width: 100%;
    font-size: 56px;
    letter-spacing: -3.1px;
  `}
  ${Media.mobile`
    width: 100%;
    font-size: 40px;
    letter-spacing: -2.2px;
  `}
`;

const SubBanner = ({ page, getBackground }) => {
  return (
    <SubBannerBlock background={() => getBackground()} className={page}>
      {page === 'feed' && (
        <FeedTitle>
          You crave.
          <br />
          We get it.
        </FeedTitle>
      )}
    </SubBannerBlock>
  );
};

export default SubBanner;
