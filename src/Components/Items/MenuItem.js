/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ItemNode = styled.li`
  height: 128px;
  padding: 16px 0 16px 0;
  display: flex;
  list-style: none;
  ${Media.desktop`
  max-width: 496.5px;
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

const Content = styled.div`
  width: 100%;
`;

const Image = styled.div`
  width: 128px;
  height: 128px;
  background-color: blue;
`;

const MenuItem = ({ item }) => {
  return (
    <ItemNode>
      <Content>
        <div>{item.food_name}</div>
        <div>{item.description}</div>
      </Content>
      <Image>image</Image>
    </ItemNode>
  );
};

export default MenuItem;
