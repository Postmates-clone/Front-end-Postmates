/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../Items/ProductInfo';
import ProductImage from '../Items/ProductImage';
import Media from '../../Style/Media';

const MainSectionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1096px;
  min-height: 576px;
  margin: 0 auto;
  padding: 115px 0 60px;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  flex-direction: ${({ isRowReverse }) =>
    isRowReverse ? 'row-reverse' : 'row'};

  ${Media.tablet`
    width: 100%;
    padding:75px 54px 80px 54px;
    justify-content:space-around;
  `}
  ${Media.mobile`
    width: 100%;
    min-height:771px;
    justify-content:center;
    padding:25px 0 40px 0;
    flex-direction: column-reverse;
  `}
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
