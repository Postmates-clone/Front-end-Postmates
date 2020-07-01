// 0630 seungeun
import React from 'react';
import styled from 'styled-components';

const CategoryItemList = [
  {
    id: 1,
    title: 'American',
    color: 'white',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-american-thumbnail.d27f9e2cb355b3465516751c5c26419835955b1f24a93915d3522d4c51dd156f5fad6b229fb156355d4a9487a606133d6b29d45e48c20e008ba2a475ceda9cd7.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 2,
    title: 'Fast Food',
    color: 'black',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-american-thumbnail.d27f9e2cb355b3465516751c5c26419835955b1f24a93915d3522d4c51dd156f5fad6b229fb156355d4a9487a606133d6b29d45e48c20e008ba2a475ceda9cd7.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
];

const CategoryListBlock = styled.ul`
  display: flex;
`;
const CategoryItemBanner = styled.li`
  position: relative;

  width: 175px;
  height: 245px;

  margin: 10px;
  padding: 20px;

  background-image: url(${(props) => props.image || null});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  color: black;

  h4 {
    position: absolute;

    bottom: 10px;

    font-size: 20px;
    font-weight: bold;
  }
`;

const Category = () => {
  return (
    <CategoryListBlock>
      {CategoryItemList.map((item) => (
        <CategoryItemBanner key={item.id} image={item.image} color={item.color}>
          <h4>{item.title}</h4>
        </CategoryItemBanner>
      ))}
    </CategoryListBlock>
  );
};

export default Category;
