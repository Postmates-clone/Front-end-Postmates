import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubHeader from '../Components/Layout/SubHeader';
import SubBanner from '../Components/Layout/SubBanner';
import { changeSubInput } from '../Modules/MainReducer';
import MainHeader from '../Components/Layout/MainHeader';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { page, storeUrl, menuList, categoryRef } = useSelector((state) => ({
    page: state.Main.page,
    storeUrl: state.Item.store.store_img,
    menuList: state.Item.store.all_menus,
    isOpenCategories: state.Main.isOpenCategories,
    categoryRef: state.Ref.categoryRef,
  }));
  // 페이지에 따라 sub-banner 배경 변경
  const getBackground = () => {
    const itemUrl = storeUrl;
    // eslint-disable-next-line operator-linebreak
    const feedUrl =
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcollection-feed-header-refresh.ff66a93edfd10817d088e6b48bbb80cbedc459960022385bbdf8141e74de7c68c092f2444e22133303ff25dc3e90131d9a4474fd8a4fd1874ca7af56840d0170.jpg&quality=85&w=3200&h=0&mode=auto&format=webp&v=4';
    const url = page === 'feed' ? feedUrl : `http://${itemUrl}`;
    return url;
  };

  // 카테고리 click시 스트롤 해당 지점으로 이동
  const handleClickScrollTo = (id) => {
    const yaxis = categoryRef.filter(({ itemKey }) => itemKey === id)[0].ref
      .offsetTop;
    window.scrollTo({ top: yaxis - 60, behavior: 'smooth' });
  };

  const generateSubHeader = () => {
    return (
      <>
        <SubBanner page={page} getBackground={getBackground} />
        <SubHeader
          page={page}
          menuList={menuList}
          handleClickScrollTo={handleClickScrollTo}
          changeSubInput={changeSubInput}
          dispatch={dispatch}
        />
      </>
    );
  };
  return (
    <>
      <MainHeader page={page} />
      {page === 'feed' || page === 'item' ? generateSubHeader() : ''}
    </>
  );
};

export default HeaderContainer;
