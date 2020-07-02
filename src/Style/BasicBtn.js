import React from 'react';
import styled from 'styled-components';

const BasicButton = styled.button`
  min-width: 150px;
`;

export const BasicBtn = ({ text }) => {
  return (
    <BasicButton>
      <span>{text}</span>
    </BasicButton>
  );
};

export const ActiveBasicBtn = ({ text }) => {
  return (
    <BasicButton>
      <span>{text}</span>
    </BasicButton>
  );
};
