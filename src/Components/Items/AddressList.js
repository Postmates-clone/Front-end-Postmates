/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import { locationIconLarge } from '../../Style/IconStyles';

const AddressListBlock = styled.ul`
  width: 100%;
  padding: 0 16px;
  background-color: yellowgreen;
  position: absolute;
  display: ${(props) => props.place};
  top: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(16, 25, 30, 0.08) 0px 1px 4px 0px;
  /* TODO; BORDER랑 BACKGROUNDCOLOR 필요한지? */
  /* border: 1px solid rgba(45, 49, 56, 0.08); */
`;

const AddressListItem = styled.li`
  display: flex;
  align-items: center;
  height: 69px;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  border-top: 1px solid rgba(217, 219, 224, 0.5);
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  span {
    max-width: 330px;
    margin-left: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const AddressList = ({ place, getGeocodeAsync, dispatch, history }) => {
  // console.log(history, 'history');
  const getGeocode = (address) => {
    dispatch(getGeocodeAsync(address, history));
  };
  return (
    <AddressListBlock place={place.length ? 'block' : 'none'}>
      {place.map((item) => (
        // <Link to="/feed">
        <AddressListItem
          key={item.id}
          onClick={() => getGeocode(item.structured_formatting.main_text)}
        >
          {locationIconLarge}
          <span>
            {item.structured_formatting.main_text},{' '}
            {item.structured_formatting.secondary_text}
          </span>
        </AddressListItem>
        // </Link>
      ))}
    </AddressListBlock>
  );
};

export default AddressList;
