import React from 'react';
import styled from 'styled-components';

const GreenOrderNow = styled.button`
  display: flex;
  width: 10.5rem;
  height: 3rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 28px;
  background-color: #00cc99;
  color: #fff;
  outline: none;
  font-size: 0.75rem;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function GreenOrderNowBtn() {
  return <GreenOrderNow>order now</GreenOrderNow>;
}
export default GreenOrderNowBtn;
