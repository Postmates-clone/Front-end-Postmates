import React, { useState } from 'react';
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

const AddressList = () => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
    { id: 1, address: 'San Francisco', description: '캘리포니아 미국' },
    { id: 2, address: 'New York', description: '뉴욕 미국' },
    { id: 3, address: 'Los Angeles', description: '캘리포니아 미국' },
  ]);
  return (
    <AddressListBlock>
      {list.map((item) => (
        <Link to="/feed">
          <AddressListItem key={`add-${item.id}`}>
            {locationIconLarge}
            <span>
              {item.address}, {item.description}
            </span>
          </AddressListItem>
        </Link>
      ))}
    </AddressListBlock>
  );
};

export default AddressList;
