import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  /* width: 600px;
  height: 406px; */
  margin-top: -80px;
  width: 600px;
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
