import React from 'react';
import styled from 'styled-components';

const Store = styled.li`
  width: 317px;
  height: 193px;

  background-image: url(${(props) => props.image || null});
`;

const Stores = ({ id, name, image }) => {
  console.log(image);

  return (
    <Store key={id} image={image}>
      {name}
    </Store>
  );
};

export default Stores;
