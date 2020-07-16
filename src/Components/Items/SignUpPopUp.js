/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-const-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PopUp from '../../Style/PopUp';
import { BasicBtn } from '../../Style/BasicBtn';
import { createUsersAsync, loginUsersAsync } from '../../Modules/UserReducer';
import SHA256 from '../../lib/sha256';

const SignUpPopUpBlock = styled.div``;
const SignUpForm = styled.form`
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

// const initialState = {
//   username: '',
//   email: '',
//   password: '',
//   phone: '',
//   address: '',
// };

const SignUpPopUp = ({ setState, openState }) => {
  const { register, handleSubmit, errors, reset, watch } = useForm({
    mode: 'all',
  });

  // const [inputs, setInputs] = useState(initialState);

  // const { username, email, password, phone, address } = inputs;
  const dispatch = useDispatch();

  const onFocus = (e) => {
    e.target.style.borderBottom = '2px solid rgb(0, 204, 153)';
  };

  const onBlur = (e) => {
    e.target.style.borderBottom = '1px solid rgb(217, 219, 224)';
  };
  // const onCreate = (e) => {
  //   e.preventDefault();
  //   for (const [key, value] of Object.entries(inputs)) {
  //     if (key === 'password') {
  //       inputs.password = SHA256(value);
  //     }
  //   }
  //   dispatch(createUsersAsync(inputs));
  //   setInputs(initialState);
  // };
  const onSubmit = async (_data) => {
    const { password } = _data;
    _data.password = SHA256(password);
    // console.log(_data);
    try {
      await dispatch(createUsersAsync(_data));
      await dispatch(
        loginUsersAsync({ email: _data.email, password: _data.password }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setState(!openState);
    }
  };

  const watchEmail = watch('email');
  const watchPassword = watch('password');
  const watchName = watch('username');
  const watchPhone = watch('phone');
  const watchAddress = watch('address');

  return (
    <SignUpPopUpBlock>
      <PopUp width="435px" setState={setState} openState={openState}>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <h3>Sign Up</h3>
          <Input
            name="email"
            label="email"
            placeholder="e-mail"
            autoComplete="off"
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
            name="password"
            placeholder="password"
            register={register}
            validation={{ required: true, minLength: 8 }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {errors.password && (
            <Alert>The password must be at least 8 characters long.</Alert>
          )}
          <Input
            label="username"
            name="username"
            placeholder="name"
            register={register}
            validation={{ required: true, minLength: 2 }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {errors.username && (
            <Alert>The name must be at least 2 characters long.</Alert>
          )}
          <Input
            label="phone"
            name="phone"
            placeholder="phone number"
            register={register}
            validation={{
              required: true,
              minLength: 2,
              pattern: /^\d{3}-\d{3,4}-\d{4}$/,
            }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {errors.phone && <Alert>Not a valid phone number.</Alert>}
          <Input
            label="address"
            name="address"
            placeholder="address"
            register={register}
            validation={{ required: true, minLength: 8 }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {errors.address && (
            <Alert>The address must be at least 8 characters long.</Alert>
          )}
          <BasicBtn
            active={
              !!(
                watchEmail &&
                watchPassword &&
                watchName &&
                watchPhone &&
                watchAddress
              )
            }
            text="SIGN UP"
            width="363px"
            twidth="363px"
          />
        </SignUpForm>
      </PopUp>
    </SignUpPopUpBlock>
  );
};

export default SignUpPopUp;
