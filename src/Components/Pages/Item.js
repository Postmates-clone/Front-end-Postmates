import React from 'react';

const ItemPage = ({ menuList }) => {
  return menuList.map((data) => <h2>{data.category}</h2>);
};

export default ItemPage;
