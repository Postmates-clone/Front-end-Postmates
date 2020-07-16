import React from 'react';
import styled from 'styled-components';
import Logo from '../Items/Logo';
import Media from '../../Style/Media';

export const FooterTopWraper = styled.div`
  display: grid;
  height: 483px;
  padding-bottom: 48px;
  margin-bottom: 75px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.21);
  & ul {
    margin-bottom: 26px;
  }
  ${Media.desktop`
  width:1024px;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
    `}
    ${Media.tablet`
    max-width:994px;
    height:610px;
    padding: 0 0 48px 0;
    margin: 0 0 45px 0;
    grid-template-columns: repeat(8, 1fr);
    `}
    ${Media.mobile`
    grid-template-columns: 50% 50%;
    grid-column:span 1;
    grid-column-gap:0;
    height:978.2px;
    padding:0;
    margin:0;
    `}
`;

export const FooterLogoSection = styled.div`
  ${Media.desktop`
  grid-column: span 2;
    `}
  ${Media.tablet`
  grid-column: span 2;
    `}
    ${Media.mobile`
  grid-column: span 0;
  height:-50px;
    `}
`;
export const FooterSectionWrap = styled.div`
  ${Media.desktop`
      grid-column: span 3;
    `}
  ${Media.tablet`
      grid-column: span 2;
    `}
    ${Media.mobile`
  grid-column: span 1;
    `}
`;

export const FooterLastSection = styled.div`
  ${Media.desktop`
      grid-column: span 1;
      width: 74px;
    `}
  ${Media.tablet`
  width:103px;
  grid-column-start:3;
    `}
    ${Media.mobile`
  grid-column: span 1;
    `}
`;

export const FooterBottomWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  height: 244px;
  margin: 0 0 45px 0;
  padding: 0 0 18px 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.21);
  ${Media.tablet`
  
  height:205px;
  padding:8px 0 18px 0;
  margin:0 0 35px 0;
  grid-template-columns: repeat(3, 1fr);
    `}
  ${Media.mobile`
  height:275px;
  padding:50px 0 10px 0;
  grid-template-columns: repeat(2, 1fr);
    `}
`;
export const BottomSecionWrap = styled.div`
  grid-column: span 1;
  & h3 {
    margin-top: -26px;
  }
`;

export const FooterLink = styled.div`
  display: flex;
  padding: 0 0 100px 0;
  ${Media.mobile`
    height:auto;
    width:auto;
    `}
`;
export const BottomNewyorkSection = styled.div`
  ${Media.mobile`
  display:none;
    `}
`;
export const NoticeWrap = styled.div``;
export const BottomLastSection = styled.div`
  ${Media.tablet`
  display:none;
    `}
`;
export default function FooterSection({ page }) {
  return (
    <div>
      <FooterTopWraper>
        <FooterLogoSection>
          <Logo page={page} />
        </FooterLogoSection>
        <FooterSectionWrap>
          <h2>POSTMATES</h2>
          <ul>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>Press & Media</span>
            </li>
            <li>
              <span>Developers</span>
            </li>
            <li>
              <span>API Docs</span>
            </li>
            <li>
              <span>Civic Labs</span>
            </li>
            <li>
              <span>Unlimited</span>
            </li>
            <li>
              <span>Gift Cards</span>
            </li>
            <li>
              <span>Pickup</span>
            </li>
            <li>
              <span>Postmates Party</span>
            </li>
            <li>
              <span>Postmates for Work</span>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterSectionWrap>
          <h2>MERCHANTS</h2>
          <ul>
            <li>
              <span>Sell on Postmates</span>
            </li>
            <li>
              <span>Restaurants</span>
            </li>
          </ul>
          <h2>FLEET</h2>
          <ul>
            <li>
              <span>Join the Fleet</span>
            </li>
          </ul>
          <h2>SUPPORT</h2>
          <ul>
            <li>
              <span>Customer Help</span>
            </li>
            <li>
              <span>Fleet Help</span>
            </li>
            <li>
              <span>Merchant Help</span>
            </li>
          </ul>
        </FooterSectionWrap>
        {page === 'main' ? (
          <FooterSectionWrap>
            <h2>MORE</h2>
            <ul>
              <li>
                <span>Delivery Near Me</span>
              </li>
              <li>
                <span>Takeout Near Me</span>
              </li>
              <li>
                <span>Pizza Near Me</span>
              </li>
              <li>
                <span>Thai Near Me</span>
              </li>
              <li>
                <span>Mexican Near Me</span>
              </li>
              <li>
                <span>Alcohol Delivery</span>
              </li>
              <li>
                <span>FoodFight!</span>
              </li>
            </ul>
          </FooterSectionWrap>
        ) : (
          <FooterSectionWrap>
            <h2>CITIES</h2>
            <ul>
              <li>
                <span>Washington DC</span>
              </li>
              <li>
                <span>Boston</span>
              </li>
              <li>
                <span>PhiladelPhia</span>
              </li>
              <li>
                <span>Baltimore</span>
              </li>
              <li>
                <span>Jersey City</span>
              </li>
              <li>
                <span>Delivery Near Me</span>
              </li>
              <li>
                <span>Takeout Near Me</span>
              </li>
              <li>
                <span>Alcohol Near Me</span>
              </li>
            </ul>
          </FooterSectionWrap>
        )}
        <FooterLastSection>
          <h2>FOLLOW US</h2>
          <ul>
            <li>
              <span>Twitter</span>
            </li>
            <li>
              <span>Facebook</span>
            </li>
            <li>
              <span>Instagram</span>
            </li>
            <li>
              <span>Snapchat</span>
            </li>
          </ul>
        </FooterLastSection>
      </FooterTopWraper>
      {page === 'main' && (
        <FooterBottomWrap>
          <BottomSecionWrap>
            <h3>OUR TOP CITIES</h3>
            <ul>
              <li>
                <span>San Francisco</span>
              </li>
              <li>
                <span>Miami</span>
              </li>
              <li>
                <span>San Diego</span>
              </li>
              <li>
                <span>East Bay</span>
              </li>
              <li>
                <span>Long Beach</span>
              </li>
            </ul>
          </BottomSecionWrap>
          <ul>
            <li>
              <span>Los Angeles</span>
            </li>
            <li>
              <span>Washingtion DC</span>
            </li>
            <li>
              <span>Seattle</span>
            </li>
            <li>
              <span>Potland</span>
            </li>
            <li>
              <span>Nashville</span>
            </li>
          </ul>
          <BottomNewyorkSection>
            <ul>
              <li>
                <span>New York City</span>
              </li>
              <li>
                <span>Orange County</span>
              </li>
              <li>
                <span>Atlanta</span>
              </li>
              <li>
                <span>Charlotte</span>
              </li>
              <li>
                <span>Denver</span>
              </li>
            </ul>
          </BottomNewyorkSection>
          <BottomLastSection>
            <ul>
              <li>
                <span>Chicago</span>
              </li>
              <li>
                <span>Phoenix</span>
              </li>
              <li>
                <span>Las Vegas</span>
              </li>
              <li>
                <span>Scaramento</span>
              </li>
              <li>
                <span>Oklahoma City</span>
              </li>
            </ul>
          </BottomLastSection>
        </FooterBottomWrap>
      )}
      {page === 'main' && (
        <NoticeWrap>
          <h4>
            Postmates is the largest, most reliable on-demand delivery and
            pickup platform.
          </h4>
          <p>
            Able to deliver anything from anywhere, Postmates is the food
            delivery, grocery delivery, whatever-you-can-think-of delivery app
            to bring what you crave right to your door.
            <span>Read More</span>
          </p>
        </NoticeWrap>
      )}
      <FooterLink>
        <span>©2020 POSTMATES INC</span>
        <span>TERMS</span>
        <span>PRIVACY</span>
      </FooterLink>
    </div>
  );
}
