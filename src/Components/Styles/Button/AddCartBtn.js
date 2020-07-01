import React from 'react';
import styled from 'styled-components';

const AddToCart = styled.button`
  display: flex;
  width: 100%;
  height: 3.7rem;
  margin: 0px;
  padding: 0px 16px;
  border-style: none;
  border-radius: 28px;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  line-height: normal;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;
function AddCartBtn() {
  return (
    <AddToCart>
      <span>add to cart</span> <span>$18.99</span>
    </AddToCart>
  );
}
export default AddCartBtn;
