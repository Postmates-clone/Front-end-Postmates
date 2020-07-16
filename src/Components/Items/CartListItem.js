import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 16px 0;
`;

const WrapItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.h5`
  font-size: 16px;
`;

const ItemPrice = styled.span`
  color: #00cc99;
`;

const ItemOption = styled.div`
  margin-top: 10px;
  color: #8f95a3;
  font-weight: 200;
`;

const Instruction = styled.div`
  margin-top: 10px;
  color: #8f95a3;
  font-weight: 200;
`;

const CartListItem = ({ item }) => {
  return (
    <ListItem>
      <WrapItem>
        <ItemTitle>{`X${item.count} ${item.name}`}</ItemTitle>
        <ItemPrice>{item.price}</ItemPrice>
      </WrapItem>
      <ItemOption>option</ItemOption>
      <Instruction>{item.instruction}</Instruction>
    </ListItem>
  );
};

export default CartListItem;
