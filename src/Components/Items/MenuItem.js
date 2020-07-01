/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ItemBlock = styled.li`
  display: flex;
  height: 128px;
  padding: 16px 0 16px 0;
  list-style: none;
  ${Media.desktop`
  width: 496.5px;
  background-color: tomato;
  `}
  ${Media.tablet`
  width: 100%;
  background-color: green;
  `}
  ${Media.mobile`
  width: 100%;
  background-color: red;
  `}
`;

const ContentBlock = styled.div`
  width: 100%;
  display: block;
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
        <div>{name}</div>
        <div>{description}</div>
      </ContentBlock>
      <ImageBlock src={img_url} />
    </ItemBlock>
  );
};

export default MenuItem;
