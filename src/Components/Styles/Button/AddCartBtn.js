import React from 'react';
import styled from 'styled-components';

const AddToCart = styled.button`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 0.75rem;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 3.7rem;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  font-weight: 600;
  align-items: center;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  padding: 0px 16px;
  border-radius: 28px;
`;
function AddCartBtn() {
  return <AddToCart />;
}
export default AddCartBtn;
