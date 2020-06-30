import React from 'react';
import styled from 'styled-components';
import GreenOrderNowBtn from './Button/GreenOrderNowBtn';
import GrayOrderNowBtn from './Button/GrayOrderNowBtn';
import LoginBtn from './Button/LogInBtn';
import SignUpBtn from './Button/SignUpBtn';
import AddCartBtn from './Button/AddCartBtn';

const ColorPalette = styled.div`
  display: flex;
`;
const Yellow = styled.div`
  width: 62px;
  height: 63px;
  background: #ffdf18;
  border-radius: 10px;
`;
const Blue = styled.div`
  width: 62px;
  height: 63px;
  background: #1c50ee;
  border-radius: 10px;
`;
const Green = styled.div`
  width: 62px;
  height: 63px;
  background: #00cc99;
  border-radius: 10px;
`;
const Black = styled.div`
  width: 62px;
  height: 62px;
  background: #000000;
  border-radius: 10px;
`;
const Dimgray = styled.div`
  width: 62px;
  height: 62px;
  background: #2d3138;
  border-radius: 10px;
`;
const Gray = styled.div`
  width: 63px;
  height: 62px;
  background: #8f95a3;
  border-radius: 10px;
`;
const White = styled.div`
  width: 62px;
  height: 62px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
`;
const Fonts = styled.div`
  width: 177px;
  height: 51px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`;
const PostmatesStd = styled.div`
  width: 34.43rem;
  height: 7.56rem;
  font-family: Postmates Std;
  font-style: normal;
  font-weight: 500;
  font-size: 75px;
  line-height: 88px;
  color: #000000;
`;
const BoldPostmatesStd = styled.div`
  width: 34.43rem;
  height: 7.56rem;
  font-family: Postmates Std;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 88px;
  color: #000000;
`;
const Postmates = styled.div`
  max-width: 992px;
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
const CartCount = styled.div`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  max-width: 10.5rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  border-radius: 100px;
`;
const CountDecrease = styled.button`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  max-width: 10.5rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  border-radius: 100px;
  cursor: pointer;
`;
const CountIncrease = styled.button`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  max-width: 10.5rem;
  height: 4rem;
  cursor: pointer;
  color: rgb(45, 49, 56);
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  border-radius: 100px;
`;
const CartCountWrapper = styled.div`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1rem;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 11rem;
  max-width: 10.5rem;
  height: 4rem;
  color: rgb(45, 49, 56);
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  border-radius: 100px;
`;
const StyleSample = () => {
  return (
    <div>
      <ColorPalette>
        Color Palette
        <Yellow />
        <Blue />
        <Green />
        <Black />
        <Dimgray />
        <Gray />
        <White />
      </ColorPalette>
      <Fonts>
        Fonts
        <PostmatesStd>Postmates Std</PostmatesStd>
        <BoldPostmatesStd>Postmates Std</BoldPostmatesStd>
      </Fonts>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Postmates>Postmates</Postmates>
      <GreenOrderNowBtn />
      <GrayOrderNowBtn />
      <LoginBtn />
      <SignUpBtn />
      <AddCartBtn />
      <CartCountWrapper>
        <CountDecrease>-</CountDecrease>
        <CartCount>1</CartCount>
        <CountIncrease>+</CountIncrease>
      </CartCountWrapper>
    </div>
  );
};
export default StyleSample;
