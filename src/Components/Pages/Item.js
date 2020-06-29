import React from 'react';
import MenuCategories from '../Items/MenuCategories';

const ItemPage = ({ categoryList }) => {
  return categoryList().map((list) => <MenuCategories list={list} />);
};

export default ItemPage;
