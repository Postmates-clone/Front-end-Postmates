/* eslint-disable react/prop-types */
import React from 'react';

const MenuCategories = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item.food_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategories;
