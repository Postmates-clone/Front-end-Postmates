/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../Items/ProductInfo';
import ProductImage from '../Items/ProductImage';

const MainSectionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1024px;
  height: 576px;
  margin: 0 auto;

  flex-direction: ${({ isRowReverse }) =>
    isRowReverse ? 'row-reverse' : 'row'};
`;

// eslint-disable-next-line react/prop-types
export default function MainSection({
  title,
  text,
  buttonText,
  isRowReverse,
  src,
}) {
  return (
    <MainSectionBlock isRowReverse={isRowReverse}>
      <ProductInfo title={title} text={text} buttonText={buttonText} />
      <ProductImage src={src} />
    </MainSectionBlock>
  );
}
