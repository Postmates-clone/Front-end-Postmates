/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressBlock = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  background-color: rgb(233, 233, 233);
  border-radius: 0.5rem;
`;

const Progress = styled.div`
  background-color: #00cc99;
  width: ${(props) => (props.width ? `${props.width}px` : '10px')};
  height: 10px;
  border-radius: 1rem;
  transition: 20s ease;
  transition-delay: 0.7s;
`;

const ProgressBar = ({ width, percent, openPopUp }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      for (let i = 11; i < 380; i++) {
        setValue(i);
      }
    }, 300);
  }, [openPopUp]);

  // console.log(width, percent);

  return (
    <ProgressBlock width={width}>
      <Progress width={value} />
    </ProgressBlock>
  );
};

export default ProgressBar;
