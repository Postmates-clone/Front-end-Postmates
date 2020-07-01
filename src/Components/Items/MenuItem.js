/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  height: 128px;
  box-sizing: content-box;

  ${Media.desktop`
  width: 496.5px;
  background-color: tomato;
  `}

  ${Media.tablet`
  width: 100%;
  padding: 20px 0 20px 0;
  background-color: green;
  `}

  ${Media.phone`
  width: 100%;
  background-color: red;
  `}
`;

const ContentBlock = styled.div`
  padding: 20px 20px 15px 20px;

  ${Media.desktop`
  padding-right: 128px;
  `}

  div {
    h3 {
      margin-bottom: 5px;
      overflow: hidden;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    span {
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
      {img_url ? <ImageBlock src={img_url} /> : ''}
      {/* <ImageBlock src={img_url} /> */}
    </ItemBlock>
  );
};

export default MenuItem;
