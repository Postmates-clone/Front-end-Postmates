import React, { useRef } from 'react';
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

const SearchItems = ({ changeSubInput, dispatch }) => {
  const inputRef = useRef();
  const changeInput = () => {
    dispatch(changeSubInput(inputRef.current.value));
  };

  return (
    <WrapperInputBlock>
      {searchIconLight}
      <InputBlock
        placeholder="Search items"
        ref={inputRef}
        onChange={changeInput}
      />
    </WrapperInputBlock>
  );
};

export default SearchItems;
