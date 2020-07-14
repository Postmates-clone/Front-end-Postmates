// import React from 'react';
// import { useSelector } from 'react-redux';
// import Cart from '../Components/Items/Cart';
// // import { getOptions } from '../Modules/CartReducer';

// export default function CartContainer() {
//   const { data, loading, error } = useSelector((state) => state.Cart.options);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getOptions());
//   // }, [dispatch]);

//   if (loading) return <div>로딩중...</div>;
//   if (error) return <div>에러 발생!</div>;
//   if (!data) return null;

//   return <Cart options={data} />;
// }
