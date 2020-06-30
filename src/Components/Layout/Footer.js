import React from 'react';
import styled from 'styled-components';
import FooterSection from './FooterSection';

export const FooterBlock = styled.div`
  color: rgba(255, 255, 255, 0.6);
  background-color: #000;
`;

export const FooterLink = styled.div`
  display: flex;
`;

export default function Footer() {
  return (
    <FooterBlock>
      <FooterSection />
      <h3>
        Postmates is the largest, most reliable on-demand delivery and pickup
        platform.
      </h3>
      <p>
        Able to deliver anything from anywhere, Postmates is the food delivery,
        grocery delivery, whatever-you-can-think-of delivery app to bring what
        you crave right to your door.
        <span>Read More</span>
      </p>
      <FooterLink>
        <span>©2020</span>
        <span>POSTMATES</span>
        <span>INCTERMSPRIVACY</span>
      </FooterLink>
    </FooterBlock>
  );
}
