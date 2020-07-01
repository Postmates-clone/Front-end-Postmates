import React from 'react';
import styled from 'styled-components';
import mapMaker from '../../Assets/mapMaker.png';
import rightArrow from '../../Assets/rightArrow.png';
import {
  InputWrapper,
  InputInner,
  InputButton,
  IconImage,
  Input,
  Title,
  Specification,
} from './MainBanner';

export const DeliverySectionBlock = styled.div`
  background-color: #0c494c;
  color: #fff;
  background-size: cover;
  height: 400px;
  background-repeat: no-repeat;
  background-image: url('https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/ready-to-order-food.51b50e784d9cb2acdd8e37a9fda07d937570cd440fde10cdd758862308d6bde614e51c1b877a58dcddfac3245d882619be81aeeec79cff352b9e2dc5393556a1.png&quality=85&w=3480&h=0&mode=auto&format=webp&v=4');
`;

export const DeliveryTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  line-height: 40px;
`;

export const DeliveryBannerContainer = styled.div`
  width: 750px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export default function DeliverySection({ title, text }) {
  return (
    <DeliverySectionBlock>
      <DeliveryBannerContainer>
        <DeliveryTextWrapper>
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
        </DeliveryTextWrapper>
      </DeliveryBannerContainer>
    </DeliverySectionBlock>
  );
}
