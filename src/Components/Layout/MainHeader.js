// 0701 seungeun
import React from 'react';
import styled from 'styled-components';

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 72px;

  padding: 0 0 0 20px;

  background: #ffdf18;

  font-size: 26px;
  font-weight: 200;
  letter-spacing: -1px;

  line-height: 72px;
`;

const MainHeader = () => {
  return (
    <MainHeaderBlock>
      <h1>Postmates</h1>
    </MainHeaderBlock>
  );
};

export default MainHeader;
