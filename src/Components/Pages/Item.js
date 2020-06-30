/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import MenuCategories from '../Items/MenuCategories';

const WarpItem = styled.main`
  max-width: 1200px;
  background-color: #ffdf18;
`;

const ItemPage = ({ generateList }) => {
  return (
    <WarpItem>
      {generateList().map((list) => (
        <MenuCategories list={list} />
      ))}
    </WarpItem>
  );
};

export default ItemPage;
