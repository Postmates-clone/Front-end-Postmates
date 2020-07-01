/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import StoreIndividual from '../Layout/StoreIndividual';
import MenuList from '../Layout/MenuList';
import { options } from '../../Dev/DevOptionMockup';

const StorePageBlock = styled.main`
  max-width: 1200px;
  background-color: #ffdf18;
`;
console.log(111, options);

const ItemPage = ({ storeData }) => {
  return (
    <StorePageBlock>
      <StoreIndividual />
      <MenuList storeData={storeData} />
    </StorePageBlock>
  );
};

export default ItemPage;
