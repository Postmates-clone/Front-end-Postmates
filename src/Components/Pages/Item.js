/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import StoreIndividual from '../Layout/StoreIndividual';
import MenuList from '../Layout/MenuList';
// FIXME: 희진 -itemPopup 작업
import ItemPopup from '../Items/ItemPopup';

const StorePageBlock = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemPage = ({ storeData }) => {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onCancel = () => {
    setDialog(false);
  };

  return (
    <StorePageBlock>
      <StoreIndividual storeData={storeData} />
      <MenuList storeData={storeData} />
      {/* 희진-아이템 팝업영역 */}
      <button type="button" onClick={onClick}>
        희진팝업테스트버튼
      </button>
      <ItemPopup
        title="test"
        children="testtesttest"
        buttonText="ADD TO CART"
        visible={dialog}
        onCancel={onCancel}
      />
    </StorePageBlock>
  );
};

export default ItemPage;
