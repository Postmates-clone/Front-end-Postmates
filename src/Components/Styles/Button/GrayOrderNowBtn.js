import React from 'react';
import styled from 'styled-components';

const GrayOrderNow = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 0.75rem;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 3rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 28px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.5rem;
  background: #d9dbe0;
`;

function GrayOrderNowBtn() {
  return <GrayOrderNow />;
}
export default GrayOrderNowBtn;
