/* eslint-disable import/no-duplicates */
import React from 'react';
// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import MainSection from '../Layout/MainSection';
import MainBanner from '../Layout/MainBanner';
// import { Location } from '../Layout/MainBanner';
import DeliverySection from '../Layout/DeliverySection';
import Footer from '../Layout/Footer';

const MainPage = () => {
  return (
    <div>
      <h1>Main page header</h1>
      <hr />
      <MainBanner />
      <MainSection
        title="Save big on every order. Join Unlimited."
        text="Unlimited free deliveries. Reduced fees on eligible orders. Exclusive deals. Try Postmates Unlimited now for free, cancel anytime."
        buttonText="TRY UNLIMITED FREE"
      />
      <MainSection
        title="Order from local favorites near you."
        text="Whatever you want, we get it. Order delivery for yourself or with friends and watch in real-time as your Postmate brings you all the things you love."
        buttonText="GET THE APP"
        isRowReverse
      />
      <MainSection
        title="We deliver more than dinner."
        text="Need another charger? Kitchen staples? Party supplies? We’ve got everything you need available for delivery within an hour."
        buttonText="ORDER NOW"
      />
      <DeliverySection />
      <Footer />
    </div>
  );
};

export default MainPage;
