import React from 'react';
import styled from 'styled-components';

const ProductInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  & > * {
    margin: 20px;
  }
`;

export const Button = styled.button`
  background-color: #00cc99;
  height: 48px;
  width: 200px;
  border-radius: 28px;
  letter-spacing: 0.72px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  color: #fff;
  outline: none;
  border: none;

  font-size: 12px;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 50px;
  letter-spacing: -2.6px;
  color: #000;
`;

const Specification = styled.div`
  font-weight: 400;
  color: #8f95a3;
  letter-spacing: 0.14px;
  font-size: 16px;
`;

// eslint-disable-next-line react/prop-types
export default function ProductInfo({ title, text, buttonText }) {
  return (
    <ProductInfoBlock>
      <Title>{title}</Title>
      <Specification>{text}</Specification>
      <Button>
        <span>{buttonText}</span>
      </Button>
    </ProductInfoBlock>
  );
}
