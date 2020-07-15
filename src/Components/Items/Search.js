import React from 'react';
import styled from 'styled-components';
import { searchIconDeep } from '../../Style/IconStyles';
import Media from '../../Style/Media';

const SearchWrap = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
  margin-right: 80px;
  margin-left: 15px;
  ${Media.tablet`
    display:none;
    `}
`;
const SearchInput = styled.input`
  max-width: 380px;
  padding-left: 15px;
  text-rendering: auto;
  letter-spacing: 1px;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  border: none;
  background-color: inherit;
  cursor: text;
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
