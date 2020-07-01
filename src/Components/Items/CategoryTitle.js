/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ViewAll from './ViewAll';

const CategoryTitle = ({ title, info, view }) => {
  const CategoryTitleBlock = styled.div`
    display: flex;

    height: 45px;

    margin: 0 0 40px 0;
    /* padding: 18px 0; */

    /* border-bottom: 1px solid #ccc; */

    /* background-color: #d3d3d3; */
  `;

  const CategoryTitleText = styled.div`
    width: 85%;

    * {
      margin: 0 0 10px 0;
    }
    h3 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -1.16px;
    }

    em {
      color: #8f95a3;
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
        <ViewAll view={view} />
      </CategoryTitleBlock>
    </>
  );
};

export default CategoryTitle;
