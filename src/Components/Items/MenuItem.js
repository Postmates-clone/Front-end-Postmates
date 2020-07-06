/* eslint-disable camelcase */

import React, { useState } from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

// FIXME: 희진 -itemPopup 작업
import ItemPopup from './ItemPopup';

const ItemBlock = styled.li`
  display: flex;
  height: 128px;
  cursor: pointer;

  ${Media.desktop`
  width: 496.5px;
  border: 1px solid rgba(217, 219, 224, 0.5);
  margin: 16px 0;
  box-sizing: border-box;
  `}

  ${Media.tablet`
  width: 100%;
  padding: 16px 0;
  box-sizing: content-box;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  `}
  ${Media.mobile`
  width: 100%;
  padding: 16px 0;
  box-sizing: content-box;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  `}
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px 15px 20px;
  overflow: hidden;

  ${Media.desktop`
  padding-right: 128px;
  `}

  div {
    h3 {
      width: 100%;
      margin-bottom: 5px;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    span {
      width: 100%;
      margin-bottom: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 라인수 */
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      line-height: 1.43;

      font-size: 14px;
      font-weight: 200;
      color: rgba(143, 149, 163, 0.9);
    }
  }

  strong {
    color: #00cc99;
    font-size: 14px;
    font-weight: 400;
  }
`;

const ImageBlock = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 0;
`;

const MenuItem = ({ item }) => {
  const { name, description, img_url, base_price } = item;

  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onCancel = () => {
    setDialog(false);
  };

  return (
    <>
      <ItemBlock>
        <ContentBlock onClick={onClick}>
          <div>
            <h3>{name}</h3>
            <span className="menu-caption">{description}</span>
          </div>
          <strong>${base_price}</strong>
        </ContentBlock>
        {/* img가 있을경우 img component 생성, 없을경우 미생성 */}
        {img_url ? <ImageBlock src={img_url} /> : ''}
      </ItemBlock>

      <ItemPopup
        item={item}
        // eslint-disable-next-line react/no-children-prop
        visible={dialog}
        onCancel={onCancel}
      />
    </>
  );
};

export default MenuItem;
