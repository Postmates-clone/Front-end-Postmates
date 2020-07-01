import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../Items/ProductInfo';
import ProductImage from '../Items/ProductImage';

const MainSectionBlock = styled.div`
  border: 1px solid blue;
  display: flex;
  box-sizing: border-box;
  padding: 115px 0 135px;
  align-items: center;
  width: 1024px;
  height: 576px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  flex-direction: ${({ isRowReverse }) =>
    isRowReverse ? 'row-reverse' : 'row'};
`;

export default function MainSection({ title, text, buttonText, isRowReverse }) {
  return (
    <MainSectionBlock isRowReverse={isRowReverse}>
      <ProductInfo title={title} text={text} buttonText={buttonText} />
      <ProductImage url="https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/home-refresh-unlimited.57d8331d158bb94edb70729c70f519fce1c2760fa24073e95cba6b87ceb7874124910e5fe208c01652e06032b4ef079b772d30931bb5755dfe8edf99cbe01047.png&quality=85&w=1328&h=0&mode=auto&format=webp&v=4" />
    </MainSectionBlock>
  );
}
