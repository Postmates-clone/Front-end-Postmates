import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import { locationIconLarge } from '../../Style/IconStyles';

const SubLocationBlock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  button {
    display: flex;
    border: none;
    background: none;
    font-size: 15px;
    font-weight: 400;
    div {
      display: flex;
      align-items: center;
    }
    .icon {
      ${Media.tablet`
        display: none;
      `}
      ${Media.mobile`
        display: none;
      `}
    }
    .address {
    }
  }
  svg {
    margin-right: 8px;
  }
`;

const SubLocation = () => {
  return (
    <SubLocationBlock>
      <button type="button">
        <div className="icon">{locationIconLarge}</div>
        <div className="address">{localStorage.getItem('location-city')}</div>
      </button>
    </SubLocationBlock>
  );
};

export default SubLocation;
