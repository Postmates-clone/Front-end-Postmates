/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Logo from '../Items/Logo';

const FooterTopWraper = styled.div`
  display: grid;
  height: 483px;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
  padding-bottom: 48px;
  margin-bottom: 45px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.21);
  & ul {
    margin-bottom: 26px;
  }
`;
const FooterLogoSection = styled.div`
  grid-column: span 2;
`;
const FooterSectionWrap = styled.div`
  grid-column: span 3;
`;
const FooterLastSection = styled.div`
  grid-column: span 1;
  width: 74px;
`;
const FooterBottomWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;
  text-rendering: optimizelegibility;
`;

export default function FooterSection() {
  return (
    <div>
      <FooterTopWraper>
        <FooterLogoSection>
          <Logo />
        </FooterLogoSection>
        <FooterSectionWrap>
          <h2>POSTMATES</h2>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Press & Media</a>
            </li>
            <li>
              <a>Developers</a>
            </li>
            <li>
              <a>API Docs</a>
            </li>
            <li>
              <a>Civic Labs</a>
            </li>
            <li>
              <a>Unlimited</a>
            </li>
            <li>
              <a>Gift Cards</a>
            </li>
            <li>
              <a>Pickup</a>
            </li>
            <li>
              <a>Postmates Party</a>
            </li>
            <li>
              <a>Postmates for Work</a>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterSectionWrap>
          <h2>MERCHANTS</h2>
          <ul>
            <li>
              <a>Sell on Postmates</a>
            </li>
            <li>
              <a>Restaurants</a>
            </li>
          </ul>
          <h2>FLEET</h2>
          <ul>
            <li>
              <a>Join the Fleet</a>
            </li>
          </ul>
          <h2>SUPPORT</h2>
          <ul>
            <li>
              <a>Customer Help</a>
            </li>
            <li>
              <a>Fleet Help</a>
            </li>
            <li>
              <a>Merchant Help</a>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterSectionWrap>
          <h2>MORE</h2>
          <ul>
            <li>
              <a>Delivery Near Me</a>
            </li>
            <li>
              <a>Takeout Near Me</a>
            </li>
            <li>
              <a>Pizza Near Me</a>
            </li>
            <li>
              <a>Thai Near Me</a>
            </li>
            <li>
              <a>Mexican Near Me</a>
            </li>
            <li>
              <a>Alcohol Delivery</a>
            </li>
            <li>
              <a>FoodFight!</a>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterLastSection>
          <h2>FOLLOW US</h2>
          <ul>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Snapchat</a>
            </li>
          </ul>
        </FooterLastSection>
      </FooterTopWraper>
      <FooterBottomWrap>
        <h3>OUR TOP CITIES</h3>
        <ul>
          <li>
            <a>San Francisco</a>
          </li>
          <li>
            <a>Miami</a>
          </li>
          <li>
            <a>San Diego</a>
          </li>
          <li>
            <a>East Bay</a>
          </li>
          <li>
            <a>Long Beach</a>
          </li>
          <li>
            <a>Los Angeles</a>
          </li>
          <li>
            <a>Washingtion DC</a>
          </li>
          <li>
            <a>Seattle</a>
          </li>
          <li>
            <a>Potland</a>
          </li>
          <li>
            <a>Nashville</a>
          </li>
          <li>
            <a>New York City</a>
          </li>
          <li>
            <a>Orange County</a>
          </li>
          <li>
            <a>Atlanta</a>
          </li>
          <li>
            <a>Charlotte</a>
          </li>
          <li>
            <a>Denver</a>
          </li>
          <li>
            <a>Chicago</a>
          </li>
          <li>
            <a>Phoenix</a>
          </li>
          <li>
            <a>Las Vegas</a>
          </li>
          <li>
            <a>Scaramento</a>
          </li>
          <li>
            <a>Oklahoma City</a>
          </li>
        </ul>
      </FooterBottomWrap>
    </div>
  );
}
