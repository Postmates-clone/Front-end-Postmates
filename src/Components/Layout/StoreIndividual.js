/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const DeliveryCostBlock = styled.div`
  color: #00cc99;
  margin-bottom: 8px;
  ${Media.desktop``};
  ${Media.tablet``};
  ${Media.mobile``};
`;

const StoreIndividualBlock = styled.div`
  ${Media.desktop`
    width: 1024px;
    padding: 42px 0 54px 0;
  `}
  ${Media.tablet`
    width: 100%;
    padding: 27px 24px 24px 24px;
  `}
  ${Media.mobile`
    width: 100%;
    padding: 27px 24px 24px 24px;
  `}

  .wrap-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StoreTitle = styled.h2`
  font-weight: 600;
  ${Media.desktop`
    font-size: 42px;
  `}
  ${Media.tablet`
  font-size: 32px;
  `}
  ${Media.mobile`
  `}
`;

const Badge = styled.div`
  padding: 7px 14px;
  background-color: rgba(250, 94, 94, 0.1);
  color: rgb(250, 94, 94);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
`;

const WrapButtonBlock = styled.div`
  display: flex;
  margin-top: 16px;
  button {
    padding: 0 14px;
    margin: 0 8px 8px 0;
    height: 32px;
    border-radius: 16px;
    border: 1px solid rgba(217, 219, 224, 0.5);
    background-color: rgb(255, 255, 255);
    font-size: 11px;
    cursor: pointer;
  }
`;

const StoreIndividual = ({ storeData }) => {
  const { name, address, food_type, delivery_fee } = storeData;
  return (
    <StoreIndividualBlock>
      <DeliveryCostBlock>${delivery_fee} Delivery</DeliveryCostBlock>
      <div className="wrap-title">
        <StoreTitle>{name}</StoreTitle>
        <Badge>{food_type}</Badge>
      </div>
      <WrapButtonBlock>
        <button>{address}</button>
        <button>MORE INFO</button>
      </WrapButtonBlock>
    </StoreIndividualBlock>
  );
};

export default React.memo(StoreIndividual);
