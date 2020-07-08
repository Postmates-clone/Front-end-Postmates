import React from 'react';
import styled from 'styled-components';
import { BasicBtn, IconBtn, LoginBtn } from './BasicBtn';
import { Counter, AddToCart } from './BasicCounter';
import {
  locationIconLarge,
  locationIconSmall,
  checkIcon,
  arrowIconLarge,
  arrowIconSmall,
  watchIcon,
} from './IconStyles';
import ItemPopup from '../Components/Items/ItemPopup';

const DesignSystemBlock = styled.div`
  padding: 50px;
`;
const Empty = styled.div`
  width: 50px;
  height: 30px;
`;

const IconSystemBlock = styled.div`
  padding: 50px;
`;

const DesignSystem = () => {
  return (
    <>
      <DesignSystemBlock>
        {/* 활성화 버튼의 경우(녹색배경) active, 비활성화 버튼의 경우(회색배경) active={false} */}
        {/* 기본 여백과 다른 버튼의 경우 width="000px" */}
        {/* 미디어쿼리 타블렛 twidth="000px" mwidth="000px" */}
        <IconBtn active text="GET NOW" icon="android" />
        <IconBtn active text="GET NOW" icon="apple" />

        <Empty />

        <BasicBtn active text="ORDER NOW" mwidth="265px" />
        <BasicBtn active={false} text="ORDER NOW" twidth="500px" />

        <Empty />

        <BasicBtn
          active={false}
          text="ORDER NOWORDER NOWORDER NOWORDER NOWORDER NOWORDER NOW"
        />

        <Empty />

        <LoginBtn active text="LOG IN" />
        <LoginBtn active={false} text="SIGN UP" />

        <Empty />

        <Counter active={false} />
        <AddToCart active text="ADD TO CART" totalprice="$5.99" />
        <ItemPopup active />
      </DesignSystemBlock>
      <IconSystemBlock>
        {locationIconLarge} {locationIconSmall} {watchIcon} {checkIcon}
        {'  '}
        {arrowIconLarge} {arrowIconSmall}
      </IconSystemBlock>
    </>
  );
};

export default DesignSystem;
