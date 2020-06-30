import React from 'react';
import styled from 'styled-components';

const GrayOrderNow = styled.button`
  display: flex;
  width: 10.5rem; /* minwidht*/
  height: 3rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 28px;
  outline: none;
  background: #d9dbe0;
  color: #fff;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 0.75rem;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function GrayOrderNowBtn() {
  return <GrayOrderNow>order now</GrayOrderNow>;
}
export default GrayOrderNowBtn;
