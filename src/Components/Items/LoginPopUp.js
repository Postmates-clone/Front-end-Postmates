/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PopUp from '../../Style/PopUp';
import { BasicBtn } from '../../Style/BasicBtn';
import api from '../../Utils/LoginApi';

const LoginPopUpBlock = styled.div``;
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

const Input = ({ label, register, validation, ...rest }) => (
  <>
    <input name={label} ref={register(validation)} {...rest} />
  </>
);

const LoginPopUp = ({ setState, openState }) => {
  const { register, handleSubmit, errors, reset, watch } = useForm();

  const onSubmit = async (_data) => {
    console.log(_data);

    try {
      const { data } = await api.post('/api/v1/members/login', {
        id: _data.email,
        password: _data.password,
      });
      // /api/v1/members/login/
    } finally {
      reset();
    }
  };

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  return (
    <LoginPopUpBlock>
      <PopUp
        width="435px"
        height="512px"
        setState={setState}
        openState={openState}
      >
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <h3>Log in</h3>
          <em>Enter your</em>
          <Input
            label="email"
            placeholder="email"
            register={register}
            validation={{ required: true, minLength: 5 }}
          />
          {errors.email && <p>this is required.</p>}
          <Input
            label="password"
            placeholder="password"
            register={register}
            validation={{ required: true }}
          />
          {errors.password && <p>this is required.</p>}
          <BasicBtn
            active={watchEmail && watchPassword ? true : false}
            text="SIGN IN"
            width="363px"
            twidth="363px"
          />
        </LoginForm>
      </PopUp>
    </LoginPopUpBlock>
  );
};

export default LoginPopUp;
