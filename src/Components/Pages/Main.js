/* eslint-disable import/no-duplicates */
import React from 'react';
import MainSection from '../Layout/MainSection';
import MainBanner from '../Layout/MainBanner';
import DeliverySection from '../Layout/DeliverySection';
import Footer from '../Layout/Footer';
import MainProducts from '../../Assets/mainProducts.png';

const MainPage = ({ place, geoCode, page, history }) => {
  return (
    <div>
      <MainBanner
        title="Burgers?"
        text="Food, drinks, groceries, and more available for delivery and pickup."
        place={place}
        geoCode={geoCode}
        history={history}
      />
      <MainSection
        title="Save big on every order. Join Unlimited."
        text="Unlimited free deliveries. Reduced fees on eligible orders. Exclusive deals. Try Postmates Unlimited now for free, cancel anytime."
        buttonText="TRY UNLIMITED FREE"
        src="https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/home-refresh-unlimited.57d8331d158bb94edb70729c70f519fce1c2760fa24073e95cba6b87ceb7874124910e5fe208c01652e06032b4ef079b772d30931bb5755dfe8edf99cbe01047.png&quality=85&w=1328&h=0&mode=auto&format=webp&v=4"
      />
      <MainSection
        title="Order from local favorites near you."
        text="Whatever you want, we get it. Order delivery for yourself or with friends and watch in real-time as your Postmate brings you all the things you love."
        buttonText="GET THE APP"
        src="https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/home-get-app.23dcef137d8c15d92424933aefd1eaff91d62134d82f0982350022464486a8ae88a603d8b979cd4d1be953ea495d1a55e61e53ea924495f33aa31e80af881081.png&quality=85&w=850&h=0&mode=auto&format=webp&v=4"
        isRowReverse
      />
      <MainSection
        title="We deliver more than dinner."
        text="Need another charger? Kitchen staples? Party supplies? We’ve got everything you need available for delivery within an hour."
        src={MainProducts}
        buttonText="ORDER NOW"
      />
      <DeliverySection
        title="Ready to order?"
        text="Browse local restaurants and businesses for delivery by entering your address below."
      />
      <Footer page={page} />
    </div>
  );
};

export default MainPage;
