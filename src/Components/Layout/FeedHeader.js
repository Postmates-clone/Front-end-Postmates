// 0630 seungeun
import React from 'react';
import styled from 'styled-components';

const FeedHeaderBlock = styled.div`
  width: 100%;
  height: 72px;

  padding: 0 0 0 20px;

  background: #ffdf18;

  font-size: 26px;
  font-weight: 200;
  letter-spacing: -1px;

  line-height: 72px;
`;

const FeedHeader = () => {
  return (
    <FeedHeaderBlock>
      <h1>Postmates</h1>
    </FeedHeaderBlock>
  );
};

export default FeedHeader;
