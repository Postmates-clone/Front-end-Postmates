import React, { useRef } from 'react';
import styled from 'styled-components';

const SignUpInputBlock = styled.div`
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
`;

const SignUpInput = ({ name, placeholder, type }) => {
  const Input = useRef(null);

  const onFocus = () => {
    Input.current.style.borderBottom = '2px solid rgb(0, 204, 153)';
  };
  const onBlur = () => {
    Input.current.style.borderBottom = '1px solid rgb(217, 219, 224)';
  };

  return (
    <SignUpInputBlock>
      <input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        ref={Input}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </SignUpInputBlock>
  );
};

export default SignUpInput;
