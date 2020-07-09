import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PopUp from '../../Style/PopUp';
import { BasicBtn } from '../../Style/BasicBtn';
import { createUsersAsync } from '../../Modules/UserReducer';

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

const SignUpPopUp = ({ setState, openState }) => {
  const initialState = {
    id: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  };
  const [inputs, setInputs] = useState(initialState);

  const { username, email, password, phone, address } = inputs;
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const { name, value } = target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = (e) => {
    e.preventDefault();
    dispatch(createUsersAsync(inputs));
    setInputs(initialState);
  };

  return (
    <SignUpPopUpBlock>
      <PopUp
        width="435px"
        height="600px"
        setState={setState}
        openState={openState}
      >
        <SignUpForm>
          <h3>Sign Up</h3>
          <input
            name="email"
            placeholder="e-mail"
            value={email}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={onChange}
          />
          <input
            name="username"
            placeholder="name"
            value={username}
            onChange={onChange}
          />
          <input
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={onChange}
          />
          <input
            name="address"
            placeholder="address"
            value={address}
            onChange={onChange}
          />
          <BasicBtn
            active={false}
            text="SIGN UP"
            width="363px"
            twidth="363px"
            onClick={onCreate}
          />
        </SignUpForm>
      </PopUp>
    </SignUpPopUpBlock>
  );
};

export default SignUpPopUp;
