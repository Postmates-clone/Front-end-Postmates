/* eslint-disable implicit-arrow-linebreak */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { getPlaceAsync, getGeocodeAsync } from '../../Modules/LocationReducer';
// import mapMaker from '../../Assets/mapMaker.png';
// import rightArrow from '../../Assets/rightArrow.png';
import AddressList from '../Items/AddressList';
import Media from '../../Style/Media';
// import { locationIconLarge } from '../../Style/IconStyles';

// import { getStoreAsync } from '../../Modules/ItemReducer';

// ${Media.desktop`
// width: 1024px;
// `}

// ${Media.tablet`
// width: 100%;
// `}

// ${Media.mobile`
// width: 100%;
// `}

export const MainBannerBlock = styled.div`
  background-size: auto 120%;
  width: 100%;
  height: 600px;
  background-position: center bottom;
  transition: opacity 0.4s linear;
  background-repeat: no-repeat;
  background-image: url('https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/home-header-food-desktop.107acc9414aa82584e32f090a7056466ae3e9ec19a8b99efa270ff80f2d88c858a25591442bf63ed4707e571354d65596ef1fb45639c7cb4c7e3cfb5ad26b39f.png&quality=85&w=0&h=1360&mode=auto&format=webp&v=4');
  background-color: #ffdf18;
`;

export const MainBannerContainer = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  /* padding: 116px 0 0; */
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  transition: opacity 0.4s linear;

  ${Media.tablet`
  max-width: 1024px;
     padding: 0 54px;
    margin: 0;
  `}

  ${Media.mobile`
     width: 100%;
     padding: 0 54px;
    /* margin: 0; */
  `}
`;

const ResponsiveWrapper = styled.div`
  display: none;

  ${Media.mobile`
    width: 100%;
    display: block;
    text-align: center;
    margin: 0;
  `}
`;

export const MainTextWrapper = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* width: 100%; */
  padding-top: 116px;
  /* padding: 20px; */
  flex-direction: column;
  align-items: flex-start;
  line-height: 40px;
  font-weight: bold;
  /* overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis; */

  ${Media.mobile`
    width: 100%;
    padding-top: 60px;
    /* text-align: center; */
    /* align-items:center; */
  `}

  ${Media.tablet`
    width: 100%;
    /* text-align: center; */
    /* align-items:center; */
  `}
`;

export const InputWrapper = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  position: relative;

  ${Media.mobile`
    width: 100%;
    justify-content:center;
    margin-top: 30px;
  `}

  ${Media.tablet`
    /* width: 100%; */
    /* justify-content:center; */
    /* margin:0; */
  `}
`;

export const InputInner = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 100%;
  padding: 10px;
  background: #fff;
`;

export const InputButton = styled.div`
  width: 60px;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconImage = styled.img`
  width: 15px;
  height: 20px;
  ${({ cursor }) =>
    // eslint-disable-next-line operator-linebreak
    cursor &&
    css`
      cursor: pointer;
    `}
`;

export const Input = styled.input`
  border: none;
  min-width: 80%;
  height: 80%;
  padding: 0;
  margin-left: 10px;
  font-size: 15px;
  font-weight: 200;
`;

const titleAni = keyframes`
  0% {
    opacity: 0;
    top: 83px;
  }
  1% {
    opacity: 1;
    top: 0;
  }
  12.5% {
    opacity: 1;
    top: 0;
  }
  13.5% {
    opacity: 0;
    top: -83px;
  }
  100% {
    opacity: 0;
    top: 83px;
  }
`;
const TitleTextWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  ${Media.mobile`
    display: none;
  `}
`;

const TitleText = styled.div`
  margin-right: 10px;

  font-size: 56px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: -2.6px;
  margin-bottom: 17px;

  /* background-color: #eee; */
`;

const OriginalText = styled.div`
  width: 100%;
  /* display: block; */
  /* position: relative; */
  overflow: hidden;

  /* background-color: #ccc; */
/* 
  ${Media.mobile`
    width: 100%;
    text-align: left;
    display: none;
  `} */
`;

export const Title = styled.div`
  position: absolute;
  top: -83px;
  font-size: 56px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: -2.6px;
  margin-bottom: 17px;

  animation-delay: ${(props) => (props.delay ? props.delay : '0s')};
  animation-duration: 29.6s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-iteration-count: infinite;
  animation-name: ${titleAni};
`;

const MobileTitle = styled.div`
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -2.17px;
`;
export const Specification = styled.div`
  font-weight: 200;
  letter-spacing: 0.14px;
  font-size: 16px;
  margin-bottom: 17px;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  line-height: 1.4;

  ${Media.mobile`
    width: 100%;
    padding-top: 20px;
    display: block;
    text-align: center;
    margin: 0;
  `}
`;
// const initialState = {
//   inputState: {
//     name: '',
//   },
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'INPUTCHANGE':
//       return {
//         title: state.current.value,
//       };
//     default:
//       return state;
//   }
// }
// const reducerAction = {
//   getChange: {
//     type: 'INPUTCHANGE',
//   },
// };

// eslint-disable-next-line no-unused-vars
export default function MainBanner({ title, text, place, geoCode, history }) {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const getPlace = () => {
    dispatch(getPlaceAsync(inputRef.current.value));
  };

  const getGeocode = () => {
    dispatch(getGeocodeAsync(place[0].structured_formatting.main_text));
  };

  return (
    <MainBannerBlock>
      <MainBannerContainer>
        <MainTextWrapper>
          <TitleTextWrapper>
            <TitleText>Want</TitleText>
            <OriginalText>
              <Title delay="0s">{title}</Title>
              <Title delay="3.7s">beer?</Title>
              <Title delay="7.4s">spicy wings?</Title>
              <Title delay="11s">smoothies?</Title>
              <Title delay="14.8s">noodles?</Title>
              <Title delay="18.7s">pizza?</Title>
            </OriginalText>
          </TitleTextWrapper>

          <ResponsiveWrapper>
            <MobileTitle>You want it. We get it.</MobileTitle>
            {/* <Specification>{text}</Specification> */}
          </ResponsiveWrapper>
          <Specification>{text}</Specification>
          <InputWrapper>
            <InputInner>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.015 16.435C15.602 14.713 17 12.555 17 10.4 17 7.432 14.552 5 11.5 5S6 7.432 6 10.4c0 2.155 1.398 4.313 2.985 6.035A21.715 21.715 0 0011.5 18.75a21.711 21.711 0 002.515-2.316zM11.5 20s6.5-4.5 6.5-9.6C18 6.865 15.09 4 11.5 4S5 6.865 5 10.4c0 5.1 6.5 9.6 6.5 9.6z"
                  fill="#fff"
                />
                <circle cx="11.5" cy="10.5" fill="#fff" r="1.5" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.015 16.435C15.602 14.713 17 12.555 17 10.4 17 7.432 14.552 5 11.5 5S6 7.432 6 10.4c0 2.155 1.398 4.313 2.985 6.035A21.715 21.715 0 0011.5 18.75a21.711 21.711 0 002.515-2.316zM11.5 20s6.5-4.5 6.5-9.6C18 6.865 15.09 4 11.5 4S5 6.865 5 10.4c0 5.1 6.5 9.6 6.5 9.6z"
                  fill="#000"
                />
                <circle cx="11.5" cy="10.5" fill="#000" r="1.5" />
                <circle cx="11.5" cy="10.5" r="6" fill="#000" />
                <circle cx="11.5" cy="10.5" r="1.5" fill="#fff" />
                <path
                  d="M8 16v-1h7.5l-.5 1-1 1-1 1-1 .5-2-.5-1-1-1-1z"
                  fill="#000"
                  stroke="#000"
                />
              </svg>
              <Input
                placeholder="Enter your address..."
                ref={inputRef}
                onChange={getPlace}
              />
            </InputInner>
            <InputButton onClick={() => getGeocode()}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.971 6.998L6.15 1.176 7.103.22l6.777 6.777-6.777 6.778-.954-.955 5.822-5.823z"
                  fill="#fff"
                />
                <path stroke="#fff" strokeWidth="1.5" d="M.114 6.924h12.6" />
              </svg>
            </InputButton>
            <AddressList
              place={place}
              getGeocodeAsync={getGeocodeAsync}
              dispatch={dispatch}
              history={history}
            />
          </InputWrapper>
        </MainTextWrapper>
      </MainBannerContainer>
    </MainBannerBlock>
  );
}
