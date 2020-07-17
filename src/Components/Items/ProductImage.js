import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ImageWrapper = styled.div`
  margin-top: -80px;
  width: 600px;
  ${Media.tablet`
    width: 360px;
    height:auto;
    padding-top: 28px;
    
  `}
  ${Media.mobile`
  width:100%;
    padding:0;
  `}
`;

const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  transition: opacity 0.4s linear 0s;
`;

export default function ProductImage({ src }) {
  return (
    <ImageWrapper>
      <Image src={src} />
    </ImageWrapper>
  );
}
