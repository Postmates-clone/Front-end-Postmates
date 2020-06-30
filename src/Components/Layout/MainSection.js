import React from 'react';
import styled from 'styled-components';

const MainSectionLayout = styled.div`
  border: 1px solid blue;
  display: flex;
  box-sizing: border-box;
  padding: 115px 0 135px;
  align-items: center;
  width: 1024px;
  height: 576px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

const Image = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

export default function MainSection() {
  return (
    <MainSectionLayout>
      <div>
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
        <div>
          <Image>image</Image>
        </div>
      </div>
    </MainSectionLayout>
  );
}
