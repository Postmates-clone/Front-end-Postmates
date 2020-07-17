// 0701 seungeun
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Media from '../../Style/Media';
import BreadCrumbs from '../Items/BreadCrumbs';
import SubLocation from '../Items/SubLocation';
import MenuCategories from '../Items/MenuCategories';
import SearchItems from '../Items/SearchItems';
import { LoginBtn } from '../../Style/BasicBtn';
import { openCart } from '../../Modules/CartReducer';
// import Cart from '../Items/Cart';

const SubHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'Postmates Std';
  position: sticky;
  z-index: 300;
  background-color: rgb(255, 255, 255);

  &.subHeader-feed {
    top: 72px;
    ${Media.desktop`
      height: 69px;
      margin-top: 308px;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    `}
    ${Media.tablet`
      height: 69px;
      margin-top: 248px;
      padding: 0 24px;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    `}
    ${Media.mobile`
      height: 55px;
      margin-top: 248px;
      padding: 20px 24px;
      box-sizing: content-box;
    `}
  }

  &.subHeader-item {
    top: 0px;
    z-index: 500;
    ${Media.desktop`
      height: 69px;
      margin-top: 260px;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    `}
    ${Media.tablet`
      height: 69px;
      margin-top: 130px;
      padding: 0 24px;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    `}
    ${Media.mobile`
      height: 55px;
      margin-top: 130px;
      padding: 20px 24px;
      box-sizing: content-box;
    `}
  }

  .wrap-subheader-item {
    display: flex;
    align-items: center;
    ${Media.desktop`
      width: 1024px;
    `}
    ${Media.tablet`
      width: 100%;
    `}
    ${Media.mobile`
      width: 100%;
    `}
  }
`;

const Bulkhead = styled.div`
  height: 30px;
  width: 1px;
  margin-right: 17px;
  background: rgba(217, 219, 224, 0.5);
  ${Media.mobile`
     display: none;
  `}
`;

const WarpLoginButton = styled.div`
  margin-left: auto;
  ${Media.tablet`
     display: none;
  `}
  ${Media.mobile`
     display: none;
  `}
`;

const SubHeader = ({
  page,
  menuList,
  handleClickCategories,
  isOpenCategories,
  handleClickScrollTo,
  changeSubInput,
  dispatch,
}) => {
  const totalCount = useSelector((state) => state.Cart.totalCount);

  return (
    <SubHeaderBlock className={`subHeader-${page}`}>
      <div className="wrap-subheader-item">
        <BreadCrumbs />
        <Bulkhead />
        <SubLocation />
        {page === 'item' && <Bulkhead />}
        {page === 'item' && (
          <MenuCategories
            menuList={menuList}
            handleClickCategories={handleClickCategories}
            isOpenCategories={isOpenCategories}
            handleClickScrollTo={handleClickScrollTo}
          />
        )}
        {page === 'item' && <Bulkhead />}
        {page === 'item' && (
          <SearchItems changeSubInput={changeSubInput} dispatch={dispatch} />
        )}
        {page === 'item' && <Bulkhead />}
        {/* {page === 'item' && <Cart />} */}
        {page === 'item' && (
          <WarpLoginButton>
            <LoginBtn
              onClick={() => dispatch(openCart(true))}
              active
              height="45px"
              width="100px"
              text={`${totalCount} ITEMS`}
            />
          </WarpLoginButton>
        )}
      </div>
    </SubHeaderBlock>
  );
};

export default React.memo(SubHeader);
