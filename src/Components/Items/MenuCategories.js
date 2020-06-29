/* eslint-disable react/prop-types */
import React from 'react';
import MenuItem from './MenuItem';
import MenuCategoryTitle from './MenuCategoryTitle';

const MenuCategories = ({ list }) => {
  return (
    <div>
      <MenuCategoryTitle title={list[0].category} />
      <ul>
        {list.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategories;
