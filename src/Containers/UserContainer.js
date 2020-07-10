/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync, patchUsersAsync } from '../Modules/UserReducer';
import User from '../Components/Pages/User';

const UserContainer = () => {
  const store = useSelector(({ User }) => User);

  // console.log(store);
  // console.log(store.status);

  // 임시 렌더용 user info
  const { userInfo, status } = store;

  // console.log(status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  if (status.loading) return <div>로딩중...</div>;
  if (status.error.error) return <div>에러 발생!</div>;

  if (!userInfo) return null;
  if (userInfo[0] === undefined) return null;

  const user = userInfo[0];

  // console.log(user);

  return <User user={user} />;
};

export default UserContainer;
