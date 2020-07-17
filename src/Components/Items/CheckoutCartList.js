import React from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
// import { useSelector } from 'react-redux';
import CartListItem from './CartListItem';

const WarpperCartList = styled.div`
  padding: 20px;
`;

const StoreTitle = styled.h4`
  border-bottom: 1px solid #d9dbe0;
  padding-bottom: 16px;
  font-size: 18px;
`;

const Price = styled.div`
  display: flex;
  padding: 10px 0;
  border-top: ${(props) => props.border};
  font-size: 16px;
  .title {
    width: 300px;
  }
  .price {
    margin-left: auto;
    color: #00cc99;
  }
`;

const CartList = styled.ul``;

const CheckoutCartList = ({ storeInfo }) => {
  return (
    <WarpperCartList>
      <StoreTitle>{storeInfo.name}</StoreTitle>
      <CartList>
        {storeInfo.ordered_menus.length
          ? storeInfo.ordered_menus.map((item) => (
              // eslint-disable-next-line react/jsx-indent
              <CartListItem key={item.id} item={item} />
              // eslint-disable-next-line indent
            ))
          : ''}
      </CartList>
      <Price border="1px solid #d9dbe0">
        <span className="title">Delivery Price</span>
        <span className="price">{`$${storeInfo.delivery_fee.toFixed(2)}`}</span>
      </Price>
      <Price border="none">
        <span className="title">Total Price</span>
        <span className="price">{`$${storeInfo.total_price.toFixed(2)}`}</span>
      </Price>
    </WarpperCartList>
  );
};

export default React.memo(CheckoutCartList);
