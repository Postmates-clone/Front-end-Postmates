/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

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
`;

const StoreIndividual = ({ storeData }) => {
  const {
    name,
    description,
    open_hour,
    address,
    food_type,
    is_pickup,
  } = storeData;
  return (
    <StoreIndividualBlock>
      <div className="wrap-title">
        <StoreTitle>{name}</StoreTitle>
        <Badge>{food_type}</Badge>
      </div>
      <WrapButtonBlock>
        <button>00~00</button>
        <button>{address}</button>
        <button>MORE INFO</button>
      </WrapButtonBlock>
    </StoreIndividualBlock>
  );
};

export default StoreIndividual;
