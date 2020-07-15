import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import { locationIconLarge } from '../../Style/IconStyles';

const AddressListBlock = styled.ul`
  width: 100%;
  padding: 0 16px;
  background-color: yellowgreen;
  position: absolute;
  top: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(16, 25, 30, 0.08) 0px 1px 4px 0px;
  border: 1px solid rgba(45, 49, 56, 0.08);
`;

const AddressListItem = styled.li`
  display: flex;
  align-items: center;
  height: 69px;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  span {
    margin-left: 16px;
  }
`;

const AddressList = ({ place, getGeocodeAsync, dispatch }) => {
  const getGeocode = (address) => {
    dispatch(getGeocodeAsync(address));
  };
  return (
    <AddressListBlock>
      {place.map((item) => (
        <Link to="/feed">
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
        </Link>
      ))}
    </AddressListBlock>
  );
};

export default AddressList;
