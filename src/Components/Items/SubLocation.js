import React from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import Icon from '../../Style/IconStyles';

const SubLocationBlock = styled.div`
  background-color: yellow;
`;

const SubLocation = () => {
  return <SubLocationBlock>{Icon.location}</SubLocationBlock>;
};

export default SubLocation;
