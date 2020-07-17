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
  font-size: 14px;
`;

const ItemPrice = styled.span`
  color: #00cc99;
`;

const ItemOption = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  color: #8f95a3;
  font-weight: 200;
  .option-name {
    width: 300px;
  }
  .option-price {
    margin-left: auto;
  }
`;

// const Instruction = styled.div`
//   margin-top: 10px;
//   font-size: 14px;
//   color: #8f95a3;
//   font-weight: 200;
// `;

const CartListItem = ({ item }) => {
  return (
    <ListItem>
      <WrapItem>
        <ItemTitle>{`X${item.quantity} ${item.name}`}</ItemTitle>
        <ItemPrice>{`$${item.total_price.toFixed(2)}`}</ItemPrice>
      </WrapItem>
      {item.options.map(({ name, price }) => (
        <ItemOption>
          <span className="option-name">{name}</span>
          <span className="option-price">{price.toFixed(2)}</span>
        </ItemOption>
      ))}
      {/* <Instruction>{item.instruction}</Instruction> */}
    </ListItem>
  );
};

export default React.memo(CartListItem);
