import React from 'react';
import styled from 'styled-components';
import { searchIconDeep } from '../../Style/IconStyles';

const SearchWrap = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
`;
const SearchInput = styled.input`
  max-width: 380px;
  padding-left: 20px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  border: none;
  background-color: inherit;
  font: 400 13.3333px Arial;
`;

const Search = () => {
  return (
    <SearchWrap>
      {searchIconDeep}
      <SearchInput placeholder="Search for anything..." />
    </SearchWrap>
  );
};

export default Search;
