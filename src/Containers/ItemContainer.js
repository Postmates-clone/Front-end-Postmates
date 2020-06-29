import React from 'react';
import ItemPage from '../Components/Pages/Item';
import { mockup } from '../Dev/mockupItem';

const ItemContainer = () => {
  const checkCategory = () => {
    const tempArray = mockup.item.map(({ category }) => category);
    const categoryArray = [...new Set(tempArray)];
    return categoryArray;
  };
  console.log(mockup.item);
  console.log(checkCategory());
  return <ItemPage menuList={mockup.item} />;
};

export default ItemContainer;
