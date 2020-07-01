// 0630 seungeun
import React from 'react';
import styled from 'styled-components';

const ViewAllBtn = styled.div`
  width: 15%;

  padding: 15px;

  color: #8f95a3;

  text-align: right;
  font-size: 14px;
`;

const ViewAll = ({ view }) => {
  return <ViewAllBtn>View all {view || null} </ViewAllBtn>;
};

export default ViewAll;
