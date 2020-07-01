/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ViewAll from './ViewAll';

const CategoryTitle = ({ title, info }) => {
  const CategoryTitleBlock = styled.div`
    display: flex;

    padding: 16px;

    background-color: #d3d3d3;
  `;

  const CategoryTitleText = styled.div`
    width: 80%;

    h3 {
      font-size: 24px;
      font-weight: bold;
    }

    em {
      font-size: 16px;
    }
  `;
  // console.log(title);
  return (
    <>
      <CategoryTitleBlock>
        <CategoryTitleText>
          <h3>{title}</h3>
          <em>{info}</em>
        </CategoryTitleText>
        <ViewAll />
      </CategoryTitleBlock>
    </>
  );
};

export default CategoryTitle;
