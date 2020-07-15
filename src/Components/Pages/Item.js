/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import StoreIndividual from '../Layout/StoreIndividual';
import MenuList from '../Layout/MenuList';
import { CLEAR_CART } from '../../Modules/CartReducer';
import Footer from '../Layout/Footer';

const StorePageBlock = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

// 희진
const ItemPage = ({ storeData, subInput }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_CART });
  }, [dispatch]);

  return (
    <StorePageBlock>
      <StoreIndividual storeData={storeData} />
      <MenuList storeData={storeData} subInput={subInput} />
      <Footer />
    </StorePageBlock>
  );
};

export default ItemPage;
