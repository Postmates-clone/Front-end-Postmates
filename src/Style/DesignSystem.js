import React from 'react';
import styled from 'styled-components';
import { BasicBtn, ActiveBasicBtn } from './BasicBtn';

const DesignSystemBlock = styled.div`
  padding: 50px;
`;
const Empty = styled.div`
  width: 50px;
  height: 30px;
`;

const DesignSystem = () => {
  return (
    <DesignSystemBlock>
      <ActiveBasicBtn text="ORDER NOW" />
      <Empty />
      <BasicBtn text="ORDER NOW" />
    </DesignSystemBlock>
  );
};

export default DesignSystem;
