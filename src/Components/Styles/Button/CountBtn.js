import React from 'react';
import styled from 'styled-components';

const CartCountWrapper = styled.div`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  max-width: 10.5rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-radius: 100px;
`;
const CartCount = styled.div`
  font-size: 1rem;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  max-width: 10.5rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  margin-left: auto;
  margin-right: 12px;
`;
const CountDecrease = styled.button`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  margin-bottom: 0px;
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border: none;
  border-color: rgba(217, 219, 224, 0.5);
  cursor: pointer;
`;
const CountIncrease = styled.button`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  margin-bottom: 0px;
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border: none;
  border-color: rgba(217, 219, 224, 0.5);
  cursor: pointer;
`;

function CountBtn() {
  return (
    <CartCountWrapper>
      <CountDecrease>-</CountDecrease>
      <CartCount>0</CartCount>
      <CountIncrease>+</CountIncrease>
    </CartCountWrapper>
  );
}
export default CountBtn;
