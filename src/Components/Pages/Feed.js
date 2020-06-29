/* eslint-disable react/prop-types */
import React from 'react';

function Feed({ stores }) {
  return (
    <ul>
      {stores.map((store) => (
        <li key={store.id}>{store.city}</li>
      ))}
    </ul>
  );
}

export default Feed;
