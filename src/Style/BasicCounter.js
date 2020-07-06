/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const itemColor = {
  fontBlack: 'rgb(45, 49, 56)',
  fontGray: 'rgba(143, 149, 163, 0.9)',
  pointGreen: 'rgb(0, 204, 153)',
  lineGray: 'rgba(217, 219, 224, 0.5)',
};

const CounterBlock = styled.div`
  display: inline-block;
  height: 54px;

  border: 1px solid ${itemColor.lineGray};
  border-radius: 30px;

  * {
    display: inline-block;
    height: 52px;
    padding: 10px;
    border: 0px;
    color: ${itemColor.fontBlack};
    font-family: 'Postmates Std', 'Helvetica Neue', sans-serif;
  }

  button {
    width: 61px;
    background-color: #fff;
    outline: none;
    border-radius: 30px;
    font-weight: bold;
  }
`;

const Increase = styled.button``;
const Decrease = styled.button`
  color: ${(props) => (props.active ? null : itemColor.fontGray)};
  /* color: ${itemColor.fontGray}; */
`;
const Value = styled.div`
  width: 30px;
`;

export const Counter = ({ active }) => {
  return (
    <CounterBlock>
      <Decrease active={active}>-</Decrease>
      <Value>1</Value>
      <Increase>+</Increase>
    </CounterBlock>
  );
};

const AddToCartBlock = styled.button`
  display: inline-block;

  min-width: 253px;
  width: ${(props) => props.width || null};
  height: 56px;

  margin: 0 5px 0 0;
  padding: 0 25px;

  border: 0px;
  border-radius: 28px;

  background-color: ${(props) => (props.active ? '#00CC99' : '#D9DBE0')};
  color: #fff;

  font-weight: bold;
  letter-spacing: 0.72px;

  .textWrapper {
    display: flex;
    justify-content: space-between;
  }
`;

export const AddToCart = ({ active, text, totalprice, ...rest }) => {
  return (
    <AddToCartBlock active={active} {...rest}>
      <div className="textWrapper">
        <span className="text">{text}</span>
        <span className="total">{totalprice}</span>
      </div>
    </AddToCartBlock>
  );
};
