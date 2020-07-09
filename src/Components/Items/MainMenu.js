import React from 'react';
import styled from 'styled-components';

const MainMenuWrap = styled.div`
  display: flex;
  width: 450px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const StyleMenu = styled.a`
  margin-right: 24px;
  color: #2d3138;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.3px;
  line-height: normal;
  justify-content: center;
  cursor: pointer;
  &:hover {
    padding-bottom: 6px;
    margin-bottom: -6px;
    border-bottom: 1px solid rgba(45, 49, 56, 0.4);
  }
`;
const MainMenu = () => {
  return (
    <div>
      <MainMenuWrap>
        <StyleMenu>FOOD</StyleMenu>
        <StyleMenu>FRESH</StyleMenu>
        <StyleMenu>DRINKS</StyleMenu>
        <StyleMenu>ESSENTIALS</StyleMenu>
        <StyleMenu>CONVENIENCE</StyleMenu>
      </MainMenuWrap>
    </div>
  );
};
export default MainMenu;
