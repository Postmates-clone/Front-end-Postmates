import React from 'react';
import styled from 'styled-components';
import FooterSection from './FooterSection';
import Media from '../../Style/Media';

export const FooterBlock = styled.div`
  width: 100%;
  height: auto;
  padding-top: 86px;
  color: rgba(255, 255, 255, 0.6);
  background-color: #000;
  & h1 {
    color: #fff;
  }
  & h1 > a {
    height: 19px;
    width: auto;
    font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
    font-size: 22px;
    letter-spacing: 0.14px;
    font-weight: 400;
    color: #fff;
  }
  & h2,
  h3 {
    color: #fff;
    font-size: 12px;
    letter-spacing: 0.14px;
    font-weight: 600;
    line-height: 2.3em;
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
  & span {
    margin: 0 15px 0 0;
    font-family: 'PostmatesStd', 'Helvetica Neue', Helvetica;
    font-size: 13px;
    letter-spacing: 0.14px;
    font-weight: 400;
    line-height: 2rem;
    color: #8f95a3;
    cursor: pointer;
  }
  ${Media.mobile`
  height:auto;
    `}
`;
export const FooterWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  ${Media.tablet`
  padding: 0 24px 0 24px;
  margin:0;
    `}
`;
export default function Footer({ page }) {
  return (
    <FooterBlock>
      <FooterWrap>
        <FooterSection page={page} />
      </FooterWrap>
    </FooterBlock>
  );
}
