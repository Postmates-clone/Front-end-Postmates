/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import EventSlider from '../../lib/EventSlider';

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
    title: 'Daily Deals',
    subscribe: 'Save Big',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2Ffb2b529f92e3caa43210796e98518c7e.png&quality=85&w=680&h=0&mode=auto&format=jpg&v=4',
  },
  {
    id: 3,
    title: 'Support Local Restaurants',
    subscribe: 'Order Now',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2Fcdd0ba3ec46250fb48617208e55d703d.png&quality=85&w=680&h=0&mode=auto&format=jpg&v=4',
  },
  {
    id: 4,
    title: 'The Ice Cream Shop',
    subscribe: 'Order Now',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2Ffd8f6b038d265e9a4a9582cc61b3968e.png&quality=85&w=680&h=0&mode=auto&format=jpg&v=4',
  },
  {
    id: 5,
    title: 'Free Delivery from Trending Restaurants',
    subscribe: 'Join the Party',
    color: 'white',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fs3.us-west-1.amazonaws.com%2Fbuyer-static.postmates.com%2Fprod%2Fadmin%2Fdata%2Fpromo%2F3bae675e1cb64eccdce8747ab762df89.png&quality=85&w=680&h=0&mode=auto&format=jpg&v=4',
  },
];

const EventItemBlock = styled.div`
  position: relative;
  margin: 0 0 30px 0;
`;

const EventItemBanner = styled.li`
  position: relative;
  padding: 20px;
  

  background-image: url(${(props) => props.image || null});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${(props) => props.color || 'black'};

  cursor: pointer;

  /* 494 * 290 */
  ${Media.desktop`
  margin: 0 36px 0 0;
  flex: 0 0 calc(50% - 18px);
  padding-top: 26%;
  `}

  ${Media.tablet`
  margin: 0 24px 0 0;
  flex: 0 0 calc(50% - 12px);
  padding-top: 26%;
  `}

  ${Media.mobile`
  margin: 0 0 0 0;
  flex: 0 0 calc(100%);
  padding-top: 65%;
  `}

 
`;

const EventText = styled.div`
  position: absolute;
  top: 20px;
  left: 23px;

  width: 190px;

  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -1.3px;
  }

  em {
    font-weight: bold;
    font-size: 13px;
    line-height: 2.2;
    text-transform: uppercase;
  }
`;

const EventItem = () => {
  return (
    <EventItemBlock>
      <EventSlider list={EventItemList} category="event">
        {EventItemList.map((event) => (
          <EventItemBanner
            key={event.id}
            image={event.image}
            color={event.color}
          >
            <EventText>
              <h4>{event.title}</h4>
              <em>{event.subscribe}</em>
            </EventText>
          </EventItemBanner>
        ))}
      </EventSlider>
    </EventItemBlock>
  );
};

export default EventItem;
