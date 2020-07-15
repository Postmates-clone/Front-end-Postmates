/* eslint-disable implicit-arrow-linebreak */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { getPlaceAsync, getGeocodeAsync } from '../../Modules/LocationReducer';
// import mapMaker from '../../Assets/mapMaker.png';
import rightArrow from '../../Assets/rightArrow.png';
import AddressList from '../Items/AddressList';
import Media from '../../Style/Media';
import { locationIconLarge } from '../../Style/IconStyles';

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
  max-width: 100%;
  height: 100%;
  margin: 0 216px;
  display: flex;
  padding: 116px 0 0;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  transition: opacity 0.4s linear;

  ${Media.mobile`
    width: 100%;
    margin: 0;
  `}

  ${Media.tablet`
    width: 100%;
    margin: 0;
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
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  line-height: 40px;
  font-weight: bold;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;

  ${Media.mobile`
    width: 100%;
    text-align: center;
    align-items:center;
  `}

  ${Media.tablet`
    width: 100%;
    text-align: center;
    align-items:center;
  `}
`;

const OriginalText = styled.div`
  display: block;

  ${Media.mobile`
    width: 100%;
    text-align: left;
    display: none;
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
    margin:0;
  `}

  ${Media.tablet`
    width: 100%;
    justify-content:center;
    margin:0;
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
`;

export const Title = styled.div`
  font-size: 56px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: -2.6px;
  margin-bottom: 17px;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
`;
export const Specification = styled.div`
  font-weight: 200;
  letter-spacing: 0.14px;
  font-size: 16px;
  margin-bottom: 17px;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
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
export default function MainBanner({ title, text, place, geoCode }) {
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
          <OriginalText>
            <Title>{title}</Title>
            <Specification>{text}</Specification>
          </OriginalText>
          <ResponsiveWrapper>
            <Title>You want it. We get it.</Title>
            <Specification>{text}</Specification>
          </ResponsiveWrapper>
          <InputWrapper>
            <InputInner>
              {locationIconLarge}
              <Input
                placeholder="Enter your address..."
                ref={inputRef}
                onChange={getPlace}
              />
            </InputInner>
            <InputButton onClick={() => getGeocode()}>
              <IconImage src={rightArrow} />
            </InputButton>
            <AddressList
              place={place}
              getGeocodeAsync={getGeocodeAsync}
              dispatch={dispatch}
            />
          </InputWrapper>
        </MainTextWrapper>
      </MainBannerContainer>
    </MainBannerBlock>
  );
}
