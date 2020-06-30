/* eslint-disable react/prop-types */
import React from 'react';
import MenuCategoryTitle from '../Items/MenuCategoryTitle';
import MenuItem from '../Items/MenuItem';

const MenuCategory = ({ key, category, list }) => {
  console.log(list, 111);
  return (
    <li key={key}>
      <MenuCategoryTitle category={category} />
      <ul>
        {list.map((item) => (
          <MenuItem item={item} />
        ))}
      </ul>
    </li>
  );
};

export default MenuCategory;
