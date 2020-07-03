import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const BreadCrumbsBlock = styled.div`
  display: flex;
  background-color: yellow;
  ${Media.mobile`
  display: none;
  `}
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
