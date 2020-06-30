/* eslint-disable import/no-duplicates */
import React from 'react';
// import styled from 'styled-components';
import MainSection from '../Layout/MainSection';
import MainBanner from '../Layout/MainBanner';
import { Location } from '../Layout/MainBanner';

const MainPage = () => {
  return (
    <div>
      <h1>Main page</h1>
      <MainBanner />
      <Location />
      <MainSection />
    </div>
  );
};

export default MainPage;
