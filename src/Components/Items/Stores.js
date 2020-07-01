// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const Store = styled.li`

  margin: 0 10px 0 0;

  * {
    
    line-height: 1.6;
  }
  h3 {
    font-weight: bold;
  }
  strong {
    margin-right: 10px;
    color: #00CC99;

    font-size: 14px;
    font-weight: 400;
  }

  em {
    color: #8F95A3;

    font-size: 14px;
  }

  ${Media.desktop`
  flex: 0 1 calc(33.3% - 24px);
  `}
  ${Media.tablet`
  flex: 0 1 calc(50% - 12px);
  `}
  ${Media.mobile`
  flex: 0 0 calc(100% - 32px);
  `}
`;

const StoreImage = styled.div`
  width: 100%;
  padding-top: 65%;
  margin-bottom: 15px;

  background-image: url(${(props) => props.image || null});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Stores = ({ id, name, image, fee, time }) => {
  // console.log(image);

  return (
    <Store key={id}>
      <StoreImage image={image} />
      <h3>{name}</h3>
      <strong>${fee} Delivery</strong>
      <em>{time} min</em>
    </Store>
  );
};

export default Stores;
