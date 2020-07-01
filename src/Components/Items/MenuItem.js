/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  height: 128px;
  padding: 16px 0 16px 0;

  ${Media.desktop`
  width: 496.5px;
  background-color: tomato;
  
  `}
  ${Media.tablet`
  width: 100%;
  background-color: green;
  `}
  ${Media.phone`
  width: 100%;
  background-color: red;
  `}
`;

const ContentBlock = styled.div`
  padding: 20px 20px 15px 20px;
  div {
    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
    }
  }
`;

const ImageBlock = styled.img`
  width: 128px;
  height: 128px;
  background-color: blue;
`;

const MenuItem = ({ item }) => {
  const { name, description, img_url } = item;
  return (
    <ItemBlock>
      <ContentBlock>
        <div>
          <h3>{name}</h3>
          <span>{description}</span>
        </div>
      </ContentBlock>
      <ImageBlock src={img_url} />
    </ItemBlock>
  );
};

export default MenuItem;
