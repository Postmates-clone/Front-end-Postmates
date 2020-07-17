import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import WarpSubHeader from '../Components/Layout/WarpSubHeader';
import { changeSubInput } from '../Modules/MainReducer';
import MainHeader from '../Components/Layout/MainHeader';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { page, storeUrl, menuList, categoryRef } = useSelector(
    (state) => ({
      page: state.Main.page,
      storeUrl: state.Item.store.store_img,
      menuList: state.Item.store.all_menus,
      categoryRef: state.Ref.categoryRef,
    }),
    shallowEqual,
  );

  // 페이지에 따라 sub-banner 배경 변경
  const getBackground = useCallback(() => {
    const itemUrl = storeUrl;
    // eslint-disable-next-line operator-linebreak
    const feedUrl =
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcollection-feed-header-refresh.ff66a93edfd10817d088e6b48bbb80cbedc459960022385bbdf8141e74de7c68c092f2444e22133303ff25dc3e90131d9a4474fd8a4fd1874ca7af56840d0170.jpg&quality=85&w=3200&h=0&mode=auto&format=webp&v=4';
    const url = page === 'feed' ? feedUrl : `${itemUrl}`;
    return url;
  }, [page, storeUrl]);

  // 카테고리 click시 스트롤 해당 지점으로 이동
  const handleClickScrollTo = useCallback(
    (id) => {
      const yaxis = categoryRef.filter(({ itemKey }) => itemKey === id)[0].ref
        .offsetTop;
      window.scrollTo({ top: yaxis - 60, behavior: 'smooth' });
    },
    [categoryRef],
  );

  return (
    <>
      <MainHeader page={page} />
      {page === 'feed' || page === 'item' ? (
        <WarpSubHeader
          page={page}
          getBackground={getBackground}
          menuList={menuList}
          handleClickScrollTo={handleClickScrollTo}
          changeSubInput={changeSubInput}
          dispatch={dispatch}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default React.memo(HeaderContainer);
