// 0630 seungeun
import React from 'react';
import styled from 'styled-components';

const ViewAllBtn = styled.div`
  display: inline-flex;
  align-items: center;

  color: #8f95a3;

  text-align: right;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 0.14px;

  cursor: pointer;

  .viewArrow {
    margin: 0 0 0 5px;
    transform: rotate(-90deg);
  }
`;

const ViewAll = ({ view }) => {
  return (
    <ViewAllBtn>
      <span>View all {view || null}</span>
      <svg width="10" height="6" className="viewArrow">
        <path
          d="M0 1l1-1 4 4 4-4 1 1-5 5z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </ViewAllBtn>
  );
};

export default ViewAll;
