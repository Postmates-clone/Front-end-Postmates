import React from 'react';
import ItemPage from '../Components/Pages/Item';
import { mockup } from '../Dev/mockupItem';

const ItemContainer = () => {
  // list의 카테고리만 중복을 제거하여 배열로 담아 return
  const checkCategory = () => {
    const tempArray = mockup.item.map(({ category }) => category);
    const categoryArray = [...new Set(tempArray)];
    return categoryArray;
  };

  // 카테고리별로 배열 나눔
  const generateList = () => {
    const categoryList = checkCategory().map((category) => {
      const sortCategory = mockup.item.filter(
        (item) => category === item.category,
      );
      return sortCategory;
    });
    return categoryList;
  };

  return <ItemPage categoryList={generateList} />;
};

export default ItemContainer;
