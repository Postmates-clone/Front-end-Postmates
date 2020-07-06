import React, { useState } from 'react';
import styled from 'styled-components';
import PopUp from '../../Style/PopUp';

const SignUpPopUpBlock = styled.div``;
const SignUpForm = styled.form`
  padding: 48px 36px 0 0;

  color: rgb(45, 49, 56);
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1.16px;
  }
  input {
    max-width: 335px;

    margin-left: 14px;
    margin-right: 14px;
    padding: 22px 0;

    color: rgb(45, 49, 56);

    font-size: 16px;
    letter-spacing: 0.14px;
    text-align: center;

    border: 0;
    border-bottom: 1px solid rgb(217, 219, 224);
  }
`;

const SignUpPopUp = ({ setState, openState }) => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const { username, email, password, phone, address } = inputs;

  const onChange = ({ target }) => {
    const { name, value } = target;
    // console.log(target);

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = (e) => {
    e.preventDefault();
  };

  const SignUpBtn = styled.button`
    padding: 5px;
  `;

  return (
    <SignUpPopUpBlock>
      <PopUp
        width="435px"
        height="512px"
        setState={setState}
        openState={openState}
      >
        <SignUpForm>
          <h3>Sign Up</h3>
          <input
            name="username"
            placeholder="name"
            value={username}
            onChange={onChange}
          />
          <input
            name="email"
            placeholder="email"
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            placeholder="password"
            value={password}
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
          <SignUpBtn onClick={onCreate}>SUBMIT</SignUpBtn>
        </SignUpForm>
      </PopUp>
    </SignUpPopUpBlock>
  );
};

export default SignUpPopUp;
