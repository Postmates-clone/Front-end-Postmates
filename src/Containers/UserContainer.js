/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync, patchUsersAsync } from '../Modules/UserReducer';
import User from '../Components/Pages/User';
import { setPage } from '../Modules/MainReducer';
// import OrderHistory from '../Components/Pages/OrderHistory';

const UserContainer = () => {
  const store = useSelector(({ User }) => User);

  // console.log(store);
  // console.log(store.status);

  // 임시 렌더용 user info
  const { userInfo, status } = store;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(setPage('account'));
  }, [dispatch]);

  if (status.loading) return <div>로딩중...</div>;
  if (status.error.error) return <div>에러 발생!</div>;

  if (!userInfo) return null;
  if (!userInfo.email) return null;

  // const user = userInfo[0];

  // console.log(status);
  // console.log(userInfo);
  // console.log(user);
  return (
    <>
      <User user={userInfo} />
      {/* <OrderHistory /> */}
    </>
  );
};

export default UserContainer;
