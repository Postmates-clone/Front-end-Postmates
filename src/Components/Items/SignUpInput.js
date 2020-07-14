/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
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
`;

const SignUpInput = ({
  name,
  placeholder,
  type,
  onChange,
  label,
  register,
  validation,
  pattern,
  ...rest
}) => {
  const onFocus = (e) => {
    e.target.style.borderBottom = '2px solid rgb(0, 204, 153)';
  };
  const onBlur = (e) => {
    e.target.style.borderBottom = '1px solid rgb(217, 219, 224)';
  };

  return (
    <>
      <Input
        name={label}
        placeholder={placeholder}
        autoComplete="off"
        type={type || 'text'}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={register(validation, pattern)}
        {...rest}
      />
    </>
  );
};

export default SignUpInput;
