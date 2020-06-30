import React from 'react';
import styled from 'styled-components';

const GreenOrderNow = styled.button`
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
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 28px;
  background-color: #00cc99;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 10.5rem;
`;

function GreenOrderNowBtn() {
  return <GreenOrderNow />;
}
export default GreenOrderNowBtn;
