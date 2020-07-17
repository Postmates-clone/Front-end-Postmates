import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import MenuCategoriesList from './MenuCategoriesList';
import Media from '../../Style/Media';
import { arrowIconLarge } from '../../Style/IconStyles';

const MenuCategoriesBlock = styled.div`
  padding-right: 24px;
  position: relative;
  cursor: pointer;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 175px;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 400;
  }
  ${Media.tablet`
    /* display: none; */
  `}
`;

const MenuCategories = ({ menuList, handleClickScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef();
  const openTextRef = useRef();

  const ChangeOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <MenuCategoriesBlock>
      <button type="button" onClick={ChangeOpen} ref={openButtonRef}>
        <span ref={openTextRef}>Category</span>
        {arrowIconLarge}
      </button>
      <MenuCategoriesList
        menuList={menuList}
        handleClickScrollTo={handleClickScrollTo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openButtonRef={openButtonRef}
        openTextRef={openTextRef}
      />
    </MenuCategoriesBlock>
  );
};

export default React.memo(MenuCategories);
