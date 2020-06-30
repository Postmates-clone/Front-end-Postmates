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
      <MainSection />
      <MainSection />
      <MainSection />
      <DeliverySection />
      <Footer />
    </div>
  );
};

export default MainPage;
