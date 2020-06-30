import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  border: 1px solid rgba(45, 49, 56, 0.08);
  border-right: none;
  display: flex;
  padding: 12px 8px;
  position: absolute;
  z-index: 1;
`;

const Input = styled.input`
  height: 36px;
  width: 100%;
  max-width: 415px;
`;

const MainBannerBlock = styled.div`
  background-size: auto 120%;
  height: 100%;
  width: 100%;
  background-image: url('https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/home-header-food-desktop.107acc9414aa82584e32f090a7056466ae3e9ec19a8b99efa270ff80f2d88c858a25591442bf63ed4707e571354d65596ef1fb45639c7cb4c7e3cfb5ad26b39f.png&quality=85&w=0&h=1360&mode=auto&format=webp&v=4');
  opacity: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-position: center bottom;
  transition: opacity 0.4s linear;
  background-color: #ffdf18;
`;

export default function MainBanner() {
  return (
    <MainBannerBlock>
      <h2>
        <div>
          <span>Want</span>
        </div>
      </h2>
      <h1>
        <span>
          Food, drinks, groceries, and more available for delivery and pickup.
        </span>
      </h1>
      <Location />
    </MainBannerBlock>
  );
}

export function Location() {
  return (
    <InputWrapper>
      <Input placeholder="Enter your address..." />
      <button type="button">btn</button>
    </InputWrapper>
  );
}
