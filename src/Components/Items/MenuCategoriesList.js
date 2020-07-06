import React from 'react';
import styled from 'styled-components';

const CategoriyListBlock = styled.div`
  width: 350px;
  height: 380px;
  padding: 0 16px;
  position: absolute;
  top: 45px;
  left: -17px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(34, 34, 34, 0.08) 0px 2px 8px 0px;
  overflow-y: hidden;
  overflow-x: auto;
`;

const CategoriyItem = styled.li`
  display: flex;
  align-items: center;
  height: 49px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const MenuCategoriesList = ({ menuList, handleClickScrollTo }) => {
  return (
    <CategoriyListBlock>
      <ul>
        {menuList.map((menu) => (
          // 유니크값 받아야 함
          <CategoriyItem
            key={`ct-${menu.id}`}
            id={`ctitem-${menu.id}`}
            onClick={() => handleClickScrollTo(menu.id)}
          >
            {menu.category}
          </CategoriyItem>
        ))}
      </ul>
    </CategoriyListBlock>
  );
};

export default MenuCategoriesList;
