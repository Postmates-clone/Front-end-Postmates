import React from 'react';
import styled from 'styled-components';
import { Location } from './MainBanner';

export const DeliverySectionBlock = styled.div`
  background-color: #0c494c;
  box-sizing: content-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function DeliverySection() {
  return (
    <DeliverySectionBlock>
      <div>
        <h2>
          <span>Ready to order?</span>
        </h2>
        <p>
          <span>
            Browse local restaurants and businesses for delivery by entering
            your address below.
          </span>
        </p>
        <Location />
      </div>
    </DeliverySectionBlock>
  );
}
