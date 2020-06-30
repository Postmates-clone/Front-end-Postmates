import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../../Components/Items/ProductInfo';

const MainSectionLayout = styled.div`
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

  /* flex-direction: ${({ isRowReverse }) =>
    isRowReverse ? 'row-reverse' : 'row'}; */
`;

const Image = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

export default function MainSection({ title, text, buttonText, isRowReverse }) {
  return (
    <MainSectionLayout isRowReverse={isRowReverse}>
      <ProductInfo title={title} text={text} buttonText={buttonText} />
      <Image>ll</Image>
    </MainSectionLayout>
  );
}
