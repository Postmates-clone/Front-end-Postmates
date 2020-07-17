import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Media from '../../Style/Media';
import PastOrder from '../Items/PastOrder';
import { DevApi } from '../../Dev/DevApi';
import { setPage } from '../../Modules/MainReducer';

const OrderHeader = styled.div`
  position: relative;
  height: 177px;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;

const HeaderWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  h1 {
    position: absolute;
    bottom: 24px;
    color: rgb(45, 49, 56);

    font-size: 42px;
    font-weight: bold;
    letter-spacing: -2.4px;
  }

  ${Media.tablet`
    padding-left: 24px;
    padding-right: 24px;

    h1 {
      font-size: 32px;
      letter-spacing: -2px;
    }
  `}

  ${Media.mobile`

  `}
`;

const Wrapper = styled.div`

  padding: 40px 0;
  margin: 0 auto;

  ${Media.desktop`
    width: 1024px;
  `}

  ${Media.tablet`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  `}

  ${Media.mobile`
    width: 100%;
    padding: 5px 0;
  `}

`;

const OrderCategory = styled.h2`
  width: 100%;
  padding: 0 0 20px 0;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);

  color: rgb(45, 49, 56);

  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.88px;

  ${Media.mobile`
  display: none;
  `}
`;

const PastOrdersList = styled.ul``;

// const pastOrders = {
//   count: 2,
//   next: null,
//   previous: null,
//   results: [
//     {
//       id: 1,
//       url: 'perrys-pizza-parlour-san-francisco',
//       name: 'Perrys Pizza Parlour',
//       store_img:
//         'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/048c222a-9736-44a9-bab9-391ce3b09315/orig.jpg',
//       total_price: 44.9,
//       ordered_date: '2020-07-15T17:07:16.173240+09:00',
//       ordered_menus: [
//         {
//           id: 17305,
//           name: 'Pistachio Baklava',
//           options: [
//             {
//               id: 7633,
//               name: 'Add Hot Tea',
//               price: 2.99,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       url: 'perrys-pizza-parlour-san-francisco',
//       name: 'Perrys Pizza Parlour',
//       store_img:
//         'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/048c222a-9736-44a9-bab9-391ce3b09315/orig.jpg',
//       total_price: 44.9,
//       ordered_date: '2020-07-15T17:07:44.668818+09:00',
//       ordered_menus: [
//         {
//           id: 17305,
//           name: 'Pistachio Baklava',
//           options: [
//             {
//               id: 7633,
//               name: 'Add Hot Tea',
//               price: 2.99,
//             },
//           ],
//         },
//         {
//           id: 17305,
//           name: 'Pistachio Baklava',
//           options: [
//             {
//               id: 7633,
//               name: 'Add Hot Tea',
//               price: 2.99,
//             },
//             {
//               id: 7633,
//               name: 'Add Hot Tea',
//               price: 2.99,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

const OrderHistory = () => {
  const [state, setState] = useState({
    loading: false,
    next: 1,
    data: [],
    error: null,
  });

  const fetchItems = async () => {
    setState((prev) => ({ ...prev, loading: true }));

    const { data } = await DevApi.getDelivery();

    // console.log(data);

    setState((prev) => ({
      ...prev,
      loading: false,
      next: prev.next + 1,
      data: [...prev.data, ...data.results],
      error: null,
    }));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    fetchItems();
    dispatch(setPage('order'));
  }, [dispatch]);

  // console.log(state);
  const { loading, data, error } = state;

  if (loading) return <div>loading</div>;
  if (!data) return null;
  if (error) return <div>{error}</div>;

  // console.log(data);

  return (
    <div>
      <OrderHeader>
        <HeaderWrapper>
          <h1>Orders</h1>
        </HeaderWrapper>
      </OrderHeader>
      <Wrapper>
        <OrderCategory>Past orders</OrderCategory>
        <PastOrdersList>
          {data.map((order) => (
            <PastOrder
              key={order.id}
              order={order}
              id={order.id}
              date={order.ordered_date}
              logo={order.store_img}
              url={order.url}
              name={order.name}
              totalprice={order.total_price}
              orderedmenus={order.ordered_menus}
            />
          ))}
        </PastOrdersList>
      </Wrapper>
    </div>
  );
};

export default OrderHistory;
