import React from 'react';
import styled from 'styled-components';

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
  width: 511px;
  height: 82px;
  font-family: Postmates Std;
  font-style: normal;
  font-weight: 500;
  font-size: 75px;
  line-height: 88px;
  color: #000000;
`;
const BoldPostmatesStd = styled.div`
  width: 551px;
  height: 121px;
  font-family: Postmates Std;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 88px;
  color: #000000;
`;
const Postmates = styled.div`
  position: sticky;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 400;
  background-color: rgb(254, 217, 40);
  transition: background-color 0.2s ease-in-out 0s;
`;
const GreenOrderNowBtn = styled.button`
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 12px;
  -webkit-letter-spacing: 0.72px;
  -moz-letter-spacing: 0.72px;
  -ms-letter-spacing: 0.72px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 56px;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 28px;
  background-color: #00cc99;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 265px;
  height: 48px;
`;
const GrayOrderNowBtn = styled.button`
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 12px;
  -webkit-letter-spacing: 0.72px;
  -moz-letter-spacing: 0.72px;
  -ms-letter-spacing: 0.72px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 56px;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 28px;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 265px;
  height: 48px;
  background: #d9dbe0;
`;
const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: #000;
  background-color: transparent;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-transition: background-color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
  min-width: 86px;
  margin-right: 10px;
`;
const SignInBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: #000;
  background-color: transparent;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-transition: background-color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
  min-width: 86px;
`;
const AddToCart = styled.button`
  -webkit-appearance: none;
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 12px;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 56px;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  width: 15%;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-weight: 600;
  -webkit-box-align: center;
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
const CartCounter = styled.button`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 16px;
  letter-spacing: -0.28px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  background-color: rgb(255, 255, 255);
  width: 168px;
  max-width: 168px;
  height: 56px;
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
      <br />
      <br />
      <GreenOrderNowBtn>ORDER NOW</GreenOrderNowBtn>
      <GrayOrderNowBtn>ORDER NOW</GrayOrderNowBtn>
      <LoginBtn>LOG IN</LoginBtn>
      <SignInBtn>SIGN UP</SignInBtn>
      <AddToCart>Add To CART</AddToCart>
      <CartCounter>1</CartCounter>
    </div>
  );
};
export default StyleSample;
