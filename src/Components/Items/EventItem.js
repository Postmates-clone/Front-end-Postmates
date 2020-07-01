import React from 'react';
import styled from 'styled-components';

const EventItemBlock = styled.ul`
  display: flex;
  padding: 10px;

  /* background-color: #333; */
`;

const EventItemBanner = styled.li`
  width: 495px;
  height: 290px;

  margin: 10px;
  padding: 20px;

  background-image: url(${(props) => props.image || null});
  color: ${(props) => props.color || 'black'};

  cursor: pointer;

  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.6;
  }

  em {
    font-size: 13px;
  }
`;

const EventItemList = [
  {
    id: 1,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'white',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2F91554dc2f023c2fe0eb6ee3d013a096c.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 2,
    title: 'Get 30 Days Free Unlimited Delivery',
    subscribe: 'LIMITED TIME ONLY',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2Ffb2b529f92e3caa43210796e98518c7e.png&quality=85&w=680&h=0&mode=auto&format=webp&v=4',
  },
];

const EventItem = () => {
  return (
    <EventItemBlock>
      {EventItemList.map((event) => (
        <EventItemBanner key={event.id} image={event.image} color={event.color}>
          <h4>{event.title}</h4>
          <em>{event.subscribe}</em>
        </EventItemBanner>
      ))}
    </EventItemBlock>
  );
};

// Get 30 Days Free Unlimited Delivery
// LIMITED TIME ONLY
// Daily Deals
// SAVE BIG
// Support Local Restaurants
// ORDER NOW
// Free Delivery from Trending Restaurants
// JOIN THE PARTY
// Get $25 Off Your Order
// INVITE FRIENDS
export default EventItem;
