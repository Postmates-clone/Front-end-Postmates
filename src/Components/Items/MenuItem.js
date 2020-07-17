/* eslint-disable camelcase */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import ItemPopup from './ItemPopup';

const WarpItem = styled.div`
  ${Media.tablet`
  width: 100%;
  `}
  ${Media.mobile`
  width: 100%;
  `}
`;

const ItemBlock = styled.li`
  display: flex;
  height: 130px;
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
  width: 100%;
  justify-content: space-between;
  padding: 20px 20px 15px 20px;
  overflow: hidden;

  ${Media.desktop`
    width: ${(props) => (props.width ? '366.5px' : '100%')};
    padding-right: 128px;
  `}

  ${Media.tablet`
  width: ${(props) => (props.width ? 'calc(100% - 128px)' : '100%')};
    /* width: calc(100% - 128px); */
  `}

  div {
    h3 {
      width: 100%;
      margin-bottom: 5px;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .titleHighlight {
        color: #00cc99;
        display: inline;
        font-size: 16px;
        line-height: inherit;
      }
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
  /* background: no-repeat center url(${(props) => props.background}); */
  /* background-size: cover; */
`;

// eslint-disable-next-line no-unused-vars
const MenuItem = ({ item, subInput, history }) => {
  const titleRef = useRef();

  const { name, description, image_url, price } = item;

  useEffect(() => {
    let title = name;
    const regex = new RegExp(subInput, 'ig');
    const findArray = name.match(regex);
    if (findArray && subInput) {
      findArray.forEach((text) => {
        const regexAll = new RegExp(text, 'g');
        title = name.replace(
          regexAll,
          `<span class="titleHighlight">${text}</span>`,
        );
      });
    }
    titleRef.current.innerHTML = title;
  }, [description, name, subInput]);

  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onCancel = () => {
    setDialog(false);
    // dispatcsh({ type: CLEAR_CART });
  };
  return (
    <WarpItem>
      <ItemBlock onClick={onClick}>
        <ContentBlock width={image_url}>
          <div>
            <h3 ref={titleRef}>{name}</h3>
            <span className="menu-caption">{description}</span>
          </div>
          <strong>${price.toFixed(2)}</strong>
        </ContentBlock>
        {/* img가 있을경우 img component 생성, 없을경우 미생성 */}
        {image_url ? <ImageBlock src={image_url} /> : ''}
      </ItemBlock>

      <ItemPopup
        item={item}
        // eslint-disable-next-line react/no-children-prop
        visible={dialog}
        onCancel={onCancel}
        onClick={onClick}
      />
    </WarpItem>
  );
};

export default React.memo(MenuItem);
