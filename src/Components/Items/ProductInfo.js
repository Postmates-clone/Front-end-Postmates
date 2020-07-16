import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ProductInfoBlock = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;

  & > * {
    margin: 20px;
    transition: opacity 0.4s linear;
  }

  ${Media.mobile`
    width: 100%;
    justify-content:center;
    text-align: center;
    padding-top: 28px;

  `}

  ${Media.tablet`
    width: 300px;
    height:261px;
    justify-content:space-around;
    text-align: center;
    padding-top: 0;

  `}
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

  ${Media.mobile`
    max-width: 80%;
    max-height: 80%;
    justify-content:center;
    align-items: center;
    text-align: center;
    /* padding-top: 28px; */

  `}

  ${Media.tablet`
    max-width: 80%;
    max-height: 80%;
    margin:0;
    /* justify-content:center;
    text-align: center;
    align-items: center; */
    /* padding-top: 28px; */

  `}
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 50px;
  letter-spacing: -2.6px;
  color: #000;

  ${Media.mobile`
    width: 100%;
    padding-top: 28px;
  `}

  ${Media.tablet`
    width: 300px;
    height:80px;
    letter-spacing:-1.7px;
    padding: 0;
    margin: 0;
    font-size:32px;
    font-weight:600;
    line-height:40px;
    text-align:left;

    
  `}
`;

const Specification = styled.div`
  font-weight: 200;
  line-height: 26px;
  color: #8f95a3;
  letter-spacing: 0.14px;
  font-size: 16px;
  ${Media.tablet`
    margin:8px 0 23px;
    text-align:left;
  `}
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
