import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const MainMenuWrap = styled.div`
  display: flex;
  min-width: 250px;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${Media.tablet`
    letter-spacing:0;
    `}
  ${Media.mobile`
    display:none;
    `}
`;
const StyleMenu = styled.a`
  margin-right: 20px;
  color: #2d3138;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  letter-spacing: 1px;
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
