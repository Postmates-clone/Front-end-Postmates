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
          <MenuItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MenuCategories;
