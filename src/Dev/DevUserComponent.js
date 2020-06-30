import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync, patchUsersAsync } from '../Modules/UserReducer';

const CustomButton = styled.button`
  width: 200px;
  height: 40px;
  color: #000;
  font-weight: 500;
  margin: 30px;
  background-color: #ffdf18;
`;

const userinfo = {
  id: 0,
  user_name: '',
  email: '',
  phone: '',
  address: '',
  favorite: [],
  cart: {
    totalPrice: 0,
    orderList: [],
  },
  history: [],
};

function DevUserComponent() {
  const store = useSelector(({ User }) => User);
  const dispatch = useDispatch();

  const getStore = () => {
    console.log(store);
  };
  const getUser = () => {
    dispatch(getUsersAsync());
  };
  const patchUser = () => {
    dispatch(patchUsersAsync(userinfo));
  };
  return (
    <div className="dev-user-component">
      <CustomButton onClick={() => getStore()}>get store</CustomButton>
      <CustomButton onClick={() => getUser()}>get user</CustomButton>
      <CustomButton onClick={() => patchUser()}>patch user</CustomButton>
    </div>
  );
}

export default DevUserComponent;
