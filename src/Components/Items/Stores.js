import React from 'react';

// eslint-disable-next-line react/prop-types
const Stores = ({ store }) => {
  // eslint-disable-next-line react/prop-types
  const { city, address, id, favorit } = store;

  return (
    <div style={{ border: '1px solid black' }}>
      <div>도시:{city}</div>
      <div>주소:{address}</div>
      <div>id:{id}</div>
      <div>좋아요:{favorit}</div>
    </div>
  );
};

export default Stores;
