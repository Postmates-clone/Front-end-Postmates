/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const ItemBlock = styled.li`
  display: flex;
  height: 128px;
  box-sizing: border-box;
  cursor: pointer;

  ${Media.desktop`
  width: 496.5px;
  border: 1px solid rgba(217, 219, 224, 0.5);
  `}

  ${Media.tablet`
  width: 100%;
  `}
  ${Media.mobile`
  width: 100%;
  `}
`;

const ContentBlock = styled.div`
  width: 100%;
  padding: 20px 20px 15px 20px;
  overflow: hidden;

  ${Media.desktop`
  padding-right: 128px;
  `}

  h3 {
    width: 100%;
    margin-bottom: 5px;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.43;

    color: rgba(143, 149, 163, 0.9);
  }
`;

const ImageBlock = styled.img`
  width: 128px;
  height: 128px;
  background-color: blue;
  margin-right: 0;
`;

const MenuItem = ({ item }) => {
  const { name, description, img_url } = item;
  return (
    <ItemBlock>
      <ContentBlock>
        <h3>{name}</h3>
        <span>{description}</span>
      </ContentBlock>
      {img_url ? <ImageBlock src={img_url} /> : ''}
    </ItemBlock>
  );
};

export default MenuItem;
