import React from 'react';
import styled from 'styled-components';
import GreenOrderNowBtn from './Button/GreenOrderNowBtn';
import GrayOrderNowBtn from './Button/GrayOrderNowBtn';
import LoginBtn from './Button/LogInBtn';
import SignUpBtn from './Button/SignUpBtn';
import AddCartBtn from './Button/AddCartBtn';
import CountBtn from './Button/CountBtn';
import { SmallButtonUi, LargeButtonUi } from './Button/Button';

export const ColorPalette = styled.div`
  display: flex;
`;
export const Yellow = styled.div`
  width: 62px;
  height: 63px;
  background: #ffdf18;
  border-radius: 10px;
`;
export const Blue = styled.div`
  width: 62px;
  height: 63px;
  background: #1c50ee;
  border-radius: 10px;
`;
export const Green = styled.div`
  width: 62px;
  height: 63px;
  background: #00cc99;
  border-radius: 10px;
`;
export const Black = styled.div`
  width: 62px;
  height: 62px;
  background: #000000;
  border-radius: 10px;
`;
export const DimGray = styled.div`
  width: 62px;
  height: 62px;
  background: #2d3138;
  border-radius: 10px;
`;
export const Gray = styled.div`
  width: 63px;
  height: 62px;
  background: #8f95a3;
  border-radius: 10px;
`;
export const White = styled.div`
  width: 62px;
  height: 62px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
`;
export const Fonts = styled.div`
  width: 177px;
  height: 51px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`;
export const PostmatesStd = styled.div`
  width: 34.43rem;
  height: 7.56rem;
  font-family: Postmates Std;
  font-style: normal;
  font-weight: 500;
  font-size: 75px;
  line-height: 88px;
  color: #000000;
`;
export const BoldPostmatesStd = styled.div`
  width: 34.43rem;
  height: 7.56rem;
  font-family: Postmates Std;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 88px;
  color: #000000;
`;
export const Postmates = styled.div`
  max-width: 1024px;
  cursor: pointer;
  align-items: center;
  display: flex;
  margin: 0 auto;
  min-height: 72px;
  background: #ffdf18;
  width: 100%;
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;
  text-rendering: optimizelegibility;
`;
export const LoginButton = () => {
  return <LoginBtn />;
};
const StyleSample = () => {
  return (
    <div>
      <Postmates>Postmates</Postmates>
      <ColorPalette>
        Color Palette
        <Yellow />
        <Blue />
        <Green />
        <Black />
        <DimGray />
        <Gray />
        <White />
      </ColorPalette>
      <GreenOrderNowBtn />
      <GrayOrderNowBtn />
      <LoginBtn />
      <SignUpBtn />
      <AddCartBtn />
      <br />
      <CountBtn />
      <LargeButtonUi>Large Btn</LargeButtonUi>
      <SmallButtonUi>SmallBtn</SmallButtonUi>
      <Fonts>
        Fonts
        <PostmatesStd>Postmates Std</PostmatesStd>
        <BoldPostmatesStd>Postmates Std</BoldPostmatesStd>
      </Fonts>
    </div>
  );
};
export default StyleSample;
