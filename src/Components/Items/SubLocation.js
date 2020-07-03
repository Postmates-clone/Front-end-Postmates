import React from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';
import { locationIconLarge } from '../../Style/IconStyles';

const SubLocationBlock = styled.div`
  background-color: yellow;
`;

const SubLocation = () => {
  return <SubLocationBlock>{locationIconLarge}</SubLocationBlock>;
};

export default SubLocation;
