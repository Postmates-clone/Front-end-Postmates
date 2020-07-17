import React from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import ProgressBar from '../Items/ProgressBar';

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 901;

  width: 100%;
  height: 100%;

  background-color: rgba(256, 256, 256, 0.63);
`;
const PopUpBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 902;

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
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
  }
  em {
    display: block;
    color: #888;
    margin-top: 20px;
    font-weight: 200;
    line-height: 1.6;
  }
  span {
    color: #333;
    margin-top: 20px;
    font-weight: bold;
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
  height: 35px;

  font-size: 14px;
  margin: 20px auto;
  display: block;
  border: 0;
  background-color: transparent;

  color: rgb(45, 49, 56);
  border-radius: 28px;
  border: 1px solid rgb(45, 49, 56);
  letter-spacing: 0.72px;
  font-weight: bold;
  outline: currentcolor none medium;
`;

// const delivery = {
//   id: 5,
//   url: 'starbucks-new-york-80834',
//   name: 'Starbucks',
//   store_img:
//     'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/da0450e9-2e4a-483b-aaa6-3b4fd50320ea/orig.jpg',
//   total_price: 14.9,
//   delivery_fee: 2.99,
//   ordered_date: '2020-07-17T12:07:40.874788+09:00',
//   ordered_menus: [
//     {
//       id: 18741,
//       name: 'Peppermint Mocha',
//       quantity: 1,
//       total_price: 4.2,
//       price: 6.15,
//       options: [
//         {
//           id: 9988,
//           name: 'Add Equal - Blue',
//           price: 0.0,
//         },
//       ],
//     },
//   ],
// };

const PopUp = ({ storeInfo, openPopUp, setOpenPopUp }) => {
  const closePopUp = () => setOpenPopUp(!openPopUp);

  const percent = 10;
  // setTimeout(() => (percent = 50), 1500);
  // console.log(storeInfo);
  const today = new Date(Date.parse(storeInfo.ordered_date));

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour %= 12;
  hour = hour || 12;

  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  const deliveryDate = `${year}. ${month}. ${date}. ${hour}:${minute}:${second} ${ampm}`;

  // console.log(deliveryDate);

  return (
    <>
      <PopUpBlock width="550px" height="550px">
        <PopUpWrapper>
          <StoreImage logo={storeInfo.store_img} />
          <OrderInfo>
            <h3>{storeInfo.name}</h3>
            <strong>the restaurant is preparing your food</strong>
            <ProgressBar width="380" percent={percent} openPopUp={openPopUp} />
            <em>
              the delivery ETA from your order from{' '}
              <span>{storeInfo.name}</span> is from <span>{deliveryDate}</span>{' '}
              The order number is <span>{storeInfo.id}</span>. if you have
              questions about your order, contact the restaurant.
            </em>
            <CancelBtn onClick={closePopUp}>CANCEL ORDER</CancelBtn>
            {/* <OrderMenus>{delivery.ordered_menus}</OrderMenus> */}
            {/* <OrderDate>Completed {date}</OrderDate> */}
          </OrderInfo>
          <CloseBtn onClick={closePopUp}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <defs>
                <path
                  id="icon-close_svg__a"
                  d="M0 1.5L1.5 0 8 6.5 14.5 0 16 1.5 9.5 8l6.5 6.5-1.5 1.5L8 9.5 1.5 16 0 14.5 6.5 8z"
                />
              </defs>
              <use xlinkHref="#icon-close_svg__a" transform="translate(4 4)" />
            </svg>
          </CloseBtn>
        </PopUpWrapper>
      </PopUpBlock>
      <Dimmed onClick={closePopUp} />
    </>
  );
};

export default PopUp;
