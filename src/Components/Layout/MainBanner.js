import React from 'react';
import styled from 'styled-components';

const Input = styled.div`
  border: 1px solid red;
`;

export default function MainBanner() {
  return (
    <>
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
    </>
  );
}

export function Location() {
  return (
    <Input>
      <input placeholder="Enter your address..." />
    </Input>
  );
}
