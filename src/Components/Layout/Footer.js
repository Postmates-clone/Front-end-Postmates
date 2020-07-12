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
  & h4 {
    font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.6);
  }
  & p {
    font-family: 'PostmatesStd', Helvetica Neue, Helvetica;
    font-size: 14px;
    letter-spacing: 0.14px;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    letter-spacing: 0;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.4);
  }
  & p > span {
    color: rgba(255, 255, 255, 0.8);
  }
  & a,
  span {
    font-family: 'PostmatesStd', 'Helvetica Neue', Helvetica;
    font-size: 13px;
    letter-spacing: 0.14px;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.9px;
    color: #8f95a3;
    cursor: pointer;
  }
  & span {
    font-weight: 500;
    margin: 0 15px 0 0;
  }
`;
export const FooterWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
export default function Footer() {
  return (
    <FooterBlock>
      <FooterWrap>
        <FooterSection />
      </FooterWrap>
    </FooterBlock>
  );
}
