import React from 'react';
import styled from 'styled-components';
import { searchIconLight } from '../../Style/IconStyles';

const WrapperInputBlock = styled.div`
  display: flex;
  align-items: center;
`;

const InputBlock = styled.input`
  width: 348px;
  height: 18px;
  padding: 16px;
  border: none;
  font-size: 14px;
`;

const SearchItems = () => {
  return (
    <WrapperInputBlock>
      {searchIconLight}
      <InputBlock placeholder="Search items" />
    </WrapperInputBlock>
  );
};

export default SearchItems;
