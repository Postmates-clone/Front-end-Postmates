/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ItemNode = styled.li`
  max-width: 496.5px;
  height: 128px;
  display: flex;
  list-style: none;
  ${Media.desktop`
  background-color: tomato;
  `}
  ${Media.tablet`
  background-color: green;
  `}
  ${Media.phone`
  background-color: red;
  `}
`;

const Content = styled.div`
  width: 100%;
`;

const Image = styled.div`
  max-width: 128px;
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
