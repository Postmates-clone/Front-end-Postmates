import React, { useState } from 'react';
import styled from 'styled-components';
import PopUp from '../../Style/PopUp';
import { BasicBtn } from '../../Style/BasicBtn';

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

const LoginPopUp = ({ setState, openState }) => {
  const initialState = {
    email: '',
    password: '',
  };
  const [inputs, setInputs] = useState(initialState);

  const { email, password } = inputs;
  // const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const { name, value } = target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = (e) => {
    e.preventDefault();
    // dispatch(createUsersAsync(inputs));
    setInputs(initialState);
  };

  return (
    <LoginPopUpBlock>
      <PopUp
        width="435px"
        height="512px"
        setState={setState}
        openState={openState}
      >
        <LoginForm>
          <h3>Log in</h3>
          <em>Enter your</em>
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
          <BasicBtn
            active={false}
            text="SIGN UP"
            width="363px"
            twidth="363px"
            onClick={onCreate}
          />
        </LoginForm>
      </PopUp>
    </LoginPopUpBlock>
  );
};

export default LoginPopUp;
