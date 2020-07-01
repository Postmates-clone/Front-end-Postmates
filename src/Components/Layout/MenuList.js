import React from 'react';
import FavoritesCategory from './FavoritesCategory';
import MenuCategory from './MenuCategory';

const MenuList = ({ storeData }) => {
  return (
    <>
      <FavoritesCategory />
      <ul>
        {storeData.menu.map((item) => (
          <MenuCategory
            key={item.id}
            category={item.category}
            list={item.list}
          />
        ))}
      </ul>
    </>
  );
};

export default MenuList;
