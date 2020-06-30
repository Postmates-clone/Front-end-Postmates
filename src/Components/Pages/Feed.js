/* eslint-disable react/prop-types */
import React from 'react';

const Feed = ({ nearby, orderby, favorite, getinfast }) => {
  // console.log(nearby.data);
  // console.log(orderby.data);
  // console.log(favorite.data);
  // console.log(getinfast.data);

  return (
    <div>
      <ul>
        {favorite.data.map((store) => (
          <li key={store.id}>
            {store.name} - <strong>{store.food_type}</strong>
          </li>
        ))}
      </ul>
      <ul>
        {orderby.data.map((store) => (
          <li key={store.id}>
            {store.name} - <strong>{store.food_type}</strong>
          </li>
        ))}
      </ul>
      <ul>
        {getinfast.data.map((store) => (
          <li key={store.id}>
            {store.name} - <strong>{store.food_type}</strong>
          </li>
        ))}
      </ul>
      <ul>
        {nearby.data.map((store) => (
          <li key={store.id}>
            {store.name} - <strong>{store.food_type}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
