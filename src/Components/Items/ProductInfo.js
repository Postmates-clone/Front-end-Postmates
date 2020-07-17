import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import { BasicBtn } from '../../Style/BasicBtn';

const ProductInfoBlock = styled.div`
  width: 100%;
  max-width: 452px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  button {
    margin: 0;
  }

  ${Media.mobile`
    min-width: 100%;
    padding-top:28px;
    align-items:center;
  `}

  ${Media.tablet`
    width: 300px;
    justify-content:space-around;
    text-align: left;
  `}
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  letter-spacing: -2.6px;
  color: #000;

  ${Media.mobile`
    min-width:100%;
    text-align:center;
  `}
  ${Media.tablet`
    width: 300px;
    letter-spacing:-1.7px;
    padding: 0;
    margin: 0;
    font-size:32px;
    font-weight:600;
    line-height:40px;
  `}
`;

const Specification = styled.div`
  font-weight: 200;
  line-height: 26px;
  color: #8f95a3;
  letter-spacing: 0.14px;
  font-size: 16px;
  ${Media.desktop`
    margin:13px 0 23px 0;
    text-align:left;
  `}
  ${Media.tablet`
    margin:8px 0 23px;
    text-align:left;
  `}
  ${Media.mobile`
  text-align:center;
  `}
`;

export default function ProductInfo({ title, text, buttonText }) {
  return (
    <ProductInfoBlock>
      <Title>{title}</Title>
      <Specification>{text}</Specification>
      <BasicBtn
        active
        text={buttonText}
        width="230px"
        twidth="230px"
        mwidth="265px"
      />
    </ProductInfoBlock>
  );
}
