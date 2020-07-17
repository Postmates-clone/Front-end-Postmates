/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PopUp from '../../Style/PopUp';
import { BasicBtn } from '../../Style/BasicBtn';
import { useSelector, useDispatch } from 'react-redux';
import { loginUsersAsync } from '../../Modules/UserReducer';
import SHA256 from '../../lib/sha256';
import { CLEAR_CART } from '../../Modules/CartReducer';

const LoginPopUpBlock = styled.div`
  z-index: 90;
`;
const LoginForm = styled.form`
  padding: 48px 36px 0 36px;

  color: rgb(45, 49, 56);
  text-align: center;

  h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1.16px;
  }
  input {
    width: 335px;

    margin-left: 14px;
    margin-right: 14px;
    padding: 22px 0;

    color: rgb(45, 49, 56);

    font-size: 16px;
    letter-spacing: 0.14px;
    text-align: center;
    font-weight: 200;

    border: 0;
    border-bottom: 1px solid rgb(217, 219, 224);
  }
  button {
    margin: 20px 0 0 0;
  }
`;

const Alert = styled.div`
  color: rgb(0, 204, 153);

  font-size: 12px;
  line-height: 20px;
`;

const Input = ({ label, register, validation, pattern, ...rest }) => (
  <>
    <input name={label} ref={register(validation, pattern)} {...rest} />
  </>
);

const LoginPopUp = ({ setState, openState }) => {
  const { register, handleSubmit, errors, reset, watch } = useForm({
    mode: 'all',
  });
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.User.isLogin);

  const onFocus = (e) => {
    e.target.style.borderBottom = '2px solid rgb(0, 204, 153)';
  };

  const onBlur = (e) => {
    e.target.style.borderBottom = '1px solid rgb(217, 219, 224)';
  };

  const onSubmit = async (_data) => {
    console.log(_data);
    const { password } = _data;
    _data.password = SHA256(password);

    await dispatch(
      loginUsersAsync({ email: _data.email, password: _data.password }),
    );
    reset();
  };

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  return (
    <LoginPopUpBlock>
      {!isLogin && (
        <>
          <PopUp width="435px" setState={setState} openState={openState}>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <h3>Log in</h3>
              <em>Enter your e-mail, password</em>
              <Input
                label="email"
                placeholder="email"
                register={register}
                validation={{
                  required: true,
                  minLength: 5,
                  pattern: /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              {errors.email && <Alert>Not a valid email.</Alert>}
              <Input
                type="password"
                label="password"
                placeholder="password"
                register={register}
                validation={{ required: true, minLength: 8 }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              {errors.password && (
                <Alert>The password must be at least 8 characters long.</Alert>
              )}
              <BasicBtn
                active={watchEmail && watchPassword ? true : false}
                text="SIGN IN"
                width="363px"
                twidth="363px"
              />
            </LoginForm>
          </PopUp>
        </>
      )}
    </LoginPopUpBlock>
  );
};

export default LoginPopUp;
