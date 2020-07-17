/* eslint-disable implicit-arrow-linebreak */
import React, { useRef, useEffect, useCallback } from 'react';
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
  overflow-y: scroll;
  overflow-x: auto;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const CategoriyItem = styled.li`
  display: flex;
  align-items: center;
  height: 49px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const MenuCategoriesList = ({
  menuList,
  handleClickScrollTo,
  isOpen,
  setIsOpen,
  openButtonRef,
  openTextRef,
}) => {
  const listRef = useRef();

  const closeList = useCallback(
    (target) => {
      if (!target.parentElement) return;
      if (target === openButtonRef.current || target === openTextRef.current) {
        return;
      }

      if (target.parentElement.parentElement === listRef.current) return;
      setIsOpen(false);
    },
    [openButtonRef, openTextRef, setIsOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', ({ target }) => closeList(target));
    return () => {
      document.removeEventListener(
        'mousedown',
        ({ target }) => closeList(target),
        // eslint-disable-next-line function-paren-newline
      );
    };
  }, [closeList]);
  return (
    <CategoriyListBlock isOpen={isOpen} ref={listRef}>
      <ul>
        {menuList.map((menu) => (
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

export default React.memo(MenuCategoriesList);
