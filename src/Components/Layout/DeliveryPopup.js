import React, { useState } from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import ProgressBar from '../Items/ProgressBar';

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;

  width: 100%;
  height: 100%;

  background-color: rgba(256, 256, 256, 0.63);
`;
const PopUpBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;

  padding: 50px;

  width: ${(props) => props.width || null};
  height: ${(props) => props.height || null};

  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
`;

const StoreImage = styled.div`
  width: 130px;
  height: 130px;

  border-radius: 80px;

  background-image: url(${(props) => props.logo || null});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const OrderInfo = styled.div`
  margin: 30px;
  * {
    display: block;
    text-align: center;
  }
  h3 {
    font-size: 23px;
    font-weight: bold;
    text-transform: capitalize;
    color: rgb(45, 49, 56);
    margin: 0 0 10px 0;
  }
  strong {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
  }
  em {
    color: #888;
    margin-top: 20px;
    font-weight: 200;
    line-height: 1.6;
  }
`;

const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  /* background-color: #ccc; */
  margin: 0 auto;
`;
// const OrderMenus = styled.div`
//   width: calc(100% - 100px);
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;

//   color: rgb(143, 149, 163);
//   font-size: 14px;
//   font-weight: 200;

//   ${Media.tablet`
//     width: calc(100% - 30px);
//   `}

//   ${Media.mobile`
//     width: calc(100% - 30px);
//   `}
// `;
// const OrderDate = styled.div`
//   margin: 11px 0 0 0;
//   color: rgb(143, 149, 163);

//   font-size: 14px;
//   font-weight: 200;
// `;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
`;

const CancelBtn = styled.button`
  width: 200px;
  height: 30px;

  font-size: 15px;
  margin: 20px auto;

  border: 0;
  background-color: transparent;
`;

const delivery = {
  id: 5,
  url: 'starbucks-new-york-80834',
  name: 'Starbucks',
  store_img:
    'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/da0450e9-2e4a-483b-aaa6-3b4fd50320ea/orig.jpg',
  total_price: 14.9,
  delivery_fee: 2.99,
  ordered_date: '2020-07-17T12:07:40.874788+09:00',
  ordered_menus: [
    {
      id: 18741,
      name: 'Peppermint Mocha',
      quantity: 1,
      total_price: 4.2,
      price: 6.15,
      options: [
        {
          id: 9988,
          name: 'Add Equal - Blue',
          price: 0.0,
        },
      ],
    },
  ],
};

const PopUp = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const closePopUp = () => setOpenPopUp(!openPopUp);

  const percent = 10;
  // setTimeout(() => (percent = 50), 1500);

  return (
    <>
      {!openPopUp && (
        <>
          <PopUpBlock width="550px" height="550px">
            <PopUpWrapper>
              <StoreImage logo={delivery.store_img} />
              <OrderInfo>
                <h3>{delivery.name}</h3>
                <strong>the restaurant is preparing your food</strong>
                <ProgressBar width="380" percent={percent} />
                <em>
                  the delivery ETA from your order from {delivery.name} is from
                  {delivery.ordered_date}. The order number is {delivery.id}. if
                  you have questions about your order, contact the restaurant.
                </em>
                <CancelBtn onClick={closePopUp}>Cancel Order</CancelBtn>
                {/* <OrderMenus>{delivery.ordered_menus}</OrderMenus> */}
                {/* <OrderDate>Completed {date}</OrderDate> */}
              </OrderInfo>
              <CloseBtn onClick={closePopUp}>
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <path
                      id="icon-close_svg__a"
                      d="M0 1.5L1.5 0 8 6.5 14.5 0 16 1.5 9.5 8l6.5 6.5-1.5 1.5L8 9.5 1.5 16 0 14.5 6.5 8z"
                    />
                  </defs>
                  <use
                    xlinkHref="#icon-close_svg__a"
                    transform="translate(4 4)"
                  />
                </svg>
              </CloseBtn>
            </PopUpWrapper>
          </PopUpBlock>
          <Dimmed onClick={closePopUp} />
        </>
      )}
    </>
  );
};

export default PopUp;
