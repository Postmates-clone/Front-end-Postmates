import React from 'react';
import styled from 'styled-components';
import mapMaker from '../../Assets/mapMaker.png';
import rightArrow from '../../Assets/rightArrow.png';

export const MainBannerBlock = styled.div`
  background-size: cover;
  height: 700px;
  background-repeat: no-repeat;
  background-image: url('https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/home-header-food-desktop.107acc9414aa82584e32f090a7056466ae3e9ec19a8b99efa270ff80f2d88c858a25591442bf63ed4707e571354d65596ef1fb45639c7cb4c7e3cfb5ad26b39f.png&quality=85&w=0&h=1360&mode=auto&format=webp&v=4');
  background-color: #ffdf18;
`;

export const MainBannerContainer = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const MainTextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  line-height: 40px;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
`;

export const InputInner = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 100%;
  background: #fff;
`;

export const InputButton = styled.div`
  width: 60px;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconImage = styled.img`
  width: 15px;
  height: 20px;
`;

export const Input = styled.input`
  border: none;
  width: 80%;
  height: 80%;
  padding: 0;
`;

export const Title = styled.div`
  font-size: 56px;
  font-weight: bold;
  line-height: 50px;
  letter-spacing: -2.6px;
  margin-bottom: 17px;
`;
export const Specification = styled.div`
  font-weight: 200;
  letter-spacing: 0.14px;
  font-size: 16px;
  margin-bottom: 17px;
`;

export default function MainBanner({ title, text }) {
  return (
    <MainBannerBlock>
      <MainBannerContainer>
        <MainTextWrapper>
          <Title>{title}</Title>
          <Specification>{text}</Specification>
          <InputWrapper>
            <InputInner>
              <IconImage src={mapMaker} />
              <Input placeholder="Enter your address..." />
            </InputInner>
            <InputButton>
              <IconImage src={rightArrow} />
            </InputButton>
          </InputWrapper>
        </MainTextWrapper>
      </MainBannerContainer>
    </MainBannerBlock>
  );
}
