// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../Items/CategoryTitle';
import EventItem from '../Items/EventItem';

const EventSectionBlock = styled.div`
  margin: 30px 0 45px 0;
`;

const EventSection = () => {
  return (
    <EventSectionBlock>
      <CategoryTitle title="Featured" />
      <EventItem />
    </EventSectionBlock>
  );
};

export default EventSection;
