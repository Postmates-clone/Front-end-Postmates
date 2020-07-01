import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 30vw;
  height: 60vh;
`;

export default function ProductImage({ src }) {
  return (
    <div>
      <Image src={src} />
    </div>
  );
}
