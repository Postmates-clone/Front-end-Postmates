import React from 'react';
import styled from 'styled-components';

const MainSectionLayout = styled.div`
  border: 1px solid blue;
  display: flex;
  box-sizing: border-box;
  padding: 25px 0 40px 0;
`;

export default function MainSection() {
  return (
    <MainSectionLayout>
      <div style={{ maxWidth: '452px', justifyContent: 'space-between' }}>
        <h2>
          <span>Save big on every order. Join Unlimited.</span>
        </h2>
        <p>
          <span>
            Unlimited free deliveries. Reduced fees on eligible orders.
            Exclusive deals. Try Postmates Unlimited now for free, cancel
            anytime.
          </span>
        </p>
        <button type="button">try unlimited free</button>
      </div>
      <div>
        <div style={{ maxWidth: '200px' }}>
          <div>image</div>
        </div>
      </div>
    </MainSectionLayout>
  );
}
