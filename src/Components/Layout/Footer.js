import React from 'react';
import styled from 'styled-components';
import FooterSection from './FooterSection';

export const FooterBlock = styled.div`
  width: 100%;
  height: 1114px;
  padding-top: 86px;
  color: rgba(255, 255, 255, 0.6);
  background-color: #000;
  & h1 {
    color: #fff;
    /* grid-column: span2; */
  }
  & h2,
  h3 {
    grid-column: span3;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.14px;
    font-weight: 600;
    line-height: 2.3em;
    letter-spacing: 0.9px;
  }
  & a {
    font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
    font-size: 13px;
    letter-spacing: 0.14px;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.9px;
    color: #8f95a3;
    cursor: pointer;
  }
`;
export const FooterWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  /* padding: 0 36px 0 36px; */
`;
export const FooterLink = styled.div`
  display: flex;
`;

export default function Footer() {
  return (
    <FooterBlock>
      <FooterWrap>
        <FooterSection />
        <h3>
          Postmates is the largest, most reliable on-demand delivery and pickup
          platform.
        </h3>
        <p>
          Able to deliver anything from anywhere, Postmates is the food
          delivery, grocery delivery, whatever-you-can-think-of delivery app to
          bring what you crave right to your door.
          <span>Read More</span>
        </p>
        <FooterLink>
          <span>©2020</span>
          <span>POSTMATES</span>
          <span>INCTERMSPRIVACY</span>
        </FooterLink>
      </FooterWrap>
    </FooterBlock>
  );
}
