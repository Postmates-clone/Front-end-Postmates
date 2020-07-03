import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const BreadCrumbsBlock = styled.div`
  display: flex;
  font-size: 14px;
  font-family: 'Postmates Std';

  ${Media.mobile`
  display: none;
  `}
  button {
    border: none;
    background: none;
  }
  span {
    padding: 0 8px;
    color: rgb(143, 149, 163);
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
