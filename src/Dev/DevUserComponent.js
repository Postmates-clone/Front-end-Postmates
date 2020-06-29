import React from 'react';
import styled from 'styled-components';
import { DevApi } from './DevApi';

const CustomButton = styled.button`
  width: 200px;
  height: 40px;
  color: #000;
  font-weight: 500;
  margin: 30px;
  background-color: #ffdf18;
`;

function DevUserComponent() {
  const getFeed = async () => {
    const { data } = await DevApi.getFeed();
    console.log(data);
  };
  return (
    <div className="dev-user-component">
      <CustomButton onClick={() => getFeed()}>get user</CustomButton>
    </div>
  );
}

export default DevUserComponent;
