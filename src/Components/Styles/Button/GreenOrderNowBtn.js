import React from 'react';
import styled from 'styled-components';

const GreenOrderNow = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 크기 */
  height: 3rem;
  width: 10.5rem;
  font-size: 0.75rem;
  /* 색상 */
  background-color: #00cc99;
  color: #fff;
`;

function GreenOrderNowBtn() {
  return <GreenOrderNow />;
}
export default GreenOrderNowBtn;
