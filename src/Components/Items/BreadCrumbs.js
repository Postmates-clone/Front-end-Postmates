import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const BreadCrumbsBlock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;

  ${Media.mobile`
  display: none;
  `}
  button {
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 400;
  }
  span {
    padding: 0 8px;
    color: rgb(143, 149, 163);
    font-size: 14px;
    font-weight: 400;
  }
`;

const BreadCrumbs = () => {
  return (
    <BreadCrumbsBlock>
      <button type="button">Delivery</button>
      <span>or</span>
      <button type="button">Pickup</button>
    </BreadCrumbsBlock>
  );
};

export default BreadCrumbs;
