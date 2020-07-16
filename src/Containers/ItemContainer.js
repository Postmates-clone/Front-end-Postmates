import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import ItemPage from '../Components/Pages/Item';
import { getStoreAsync } from '../Modules/ItemReducer';
import { setPage } from '../Modules/MainReducer';

const ItemContainer = ({ history }) => {
  const { storeData, subInput } = useSelector(
    (state) => ({
      storeData: state.Item.store,
      subInput: state.Main.subHeaderInput,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage('item'));
    dispatch(getStoreAsync(window.location.href.substring(27)));
    window.scrollTo({ top: 0 });
  }, [dispatch]);

  return (
    <ItemPage storeData={storeData} subInput={subInput} history={history} />
  );
};

export default React.memo(ItemContainer);
