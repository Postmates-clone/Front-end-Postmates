import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import PastOrder from '../Items/PastOrder';

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

const pastOrders = [
  {
    order_id: 1,
    url: 'starbucks-new-york-80834',
    name: 'starbucks',
    logo: 'https://www.starbucks.co.kr/common/img/common/logo.png',
    ordered_date: '10/28/2018',
    total_price: 11.9,
    ordered_menus: [
      {
        category: 'Promos',
        menus: [
          {
            name: 'Peppermint Mocha',
            description:
              'Our signature Espresso Roast, milk, mocha-flavored sauce and peppermint-flavored syrup over ice. Topped with sweet whipped cream and chocolate curls.',
            image_url:
              'https://items-static.postmates.com/uploads/media/1653da84-5d8b-4a34-8c6b-e848537161f3/original.jpg?v=63743841295',
            price: 6.15,
            options: [
              {
                name: 'grande',
                price: 0.8,
              },
            ], // options
          },
        ], // menus
      },
      {
        category: 'Coffee',
        menus: [
          {
            name: 'Ice Coldbrew',
            description:
              'Our signature Espresso Roast, milk, mocha-flavored sauce and peppermint-flavored syrup over ice. Topped with sweet whipped cream and chocolate curls.',
            image_url:
              'https://items-static.postmates.com/uploads/media/1653da84-5d8b-4a34-8c6b-e848537161f3/original.jpg?v=63743841295',
            price: 4.15,
            options: [
              {
                name: 'grande',
                price: 0.8,
              },
            ], // options
          },
        ], // menus
      },
      {
        category: 'Promos',
        menus: [
          {
            name: 'Peppermint Mocha',
            description:
              'Our signature Espresso Roast, milk, mocha-flavored sauce and peppermint-flavored syrup over ice. Topped with sweet whipped cream and chocolate curls.',
            image_url:
              'https://items-static.postmates.com/uploads/media/1653da84-5d8b-4a34-8c6b-e848537161f3/original.jpg?v=63743841295',
            price: 6.15,
            options: [
              {
                name: 'grande',
                price: 0.8,
              },
            ], // options
          },
        ], // menus
      },
      {
        category: 'Coffee',
        menus: [
          {
            name: 'Ice Coldbrew',
            description:
              'Our signature Espresso Roast, milk, mocha-flavored sauce and peppermint-flavored syrup over ice. Topped with sweet whipped cream and chocolate curls.',
            image_url:
              'https://items-static.postmates.com/uploads/media/1653da84-5d8b-4a34-8c6b-e848537161f3/original.jpg?v=63743841295',
            price: 4.15,
            options: [
              {
                name: 'grande',
                price: 0.8,
              },
            ], // options
          },
        ], // menus
      },
    ], // order menus
  },
  {
    order_id: 2,
    url: 'starbucks-new-york-80834',
    name: 'starbucks',
    logo: 'https://www.starbucks.co.kr/common/img/common/logo.png',
    ordered_date: '10/28/2018',
    total_price: 11.9,
    ordered_menus: [
      {
        category: 'Promos',
        menus: [
          {
            name: 'Peppermint Mocha',
            description:
              'Our signature Espresso Roast, milk, mocha-flavored sauce and peppermint-flavored syrup over ice. Topped with sweet whipped cream and chocolate curls.',
            image_url:
              'https://items-static.postmates.com/uploads/media/1653da84-5d8b-4a34-8c6b-e848537161f3/original.jpg?v=63743841295',
            price: 6.15,
            options: [
              {
                name: 'grande',
                price: 0.8,
              },
            ], // options
          },
        ], // menus
      },
      {
        category: 'Coffee',
        menus: [
          {
            name: 'Ice Coldbrew',
            description:
              'Our signature Espresso Roast, milk, mocha-flavored sauce and peppermint-flavored syrup over ice. Topped with sweet whipped cream and chocolate curls.',
            image_url:
              'https://items-static.postmates.com/uploads/media/1653da84-5d8b-4a34-8c6b-e848537161f3/original.jpg?v=63743841295',
            price: 4.15,
            options: [
              {
                name: 'grande',
                price: 0.8,
              },
            ], // options
          },
        ], // menus
      },
    ], // order menus
  },
];

const OrderHistory = () => {
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
          {pastOrders.map((order) => (
            <PastOrder
              id={order.order_id}
              url={order.url}
              name={order.name}
              logo={order.logo}
              date={order.ordered_date}
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
