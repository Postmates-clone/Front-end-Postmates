import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const UserHeaderBlock = styled.div`
  position: relative;
  height: 177px;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  ${Media.desktop`
  display: block;
  `}

  ${Media.tablet`
  display: none;
  `}

  ${Media.mobile`
  display: none;
  `}
`;

const HeaderWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  h1 {
    position: absolute;
    bottom: 24px;
    color: rgb(45, 49, 56);

    font-size: 42px;
    font-weight: bold;
    letter-spacing: -2.4px;
  }
`;

const UserHeader = ({ title }) => {
  return (
    <UserHeaderBlock>
      <HeaderWrapper>
        <h1>{title}</h1>
      </HeaderWrapper>
    </UserHeaderBlock>
  );
};

export default UserHeader;
