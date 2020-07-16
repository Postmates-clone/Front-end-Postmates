// 0630 seungeun
import React from 'react';
import styled from 'styled-components';
import CategorySlider from '../../lib/CategorySlider';
import Media from '../../Style/Media';

const CategoryItemList = [
  {
    id: 1,
    title: 'American',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-american-thumbnail.d27f9e2cb355b3465516751c5c26419835955b1f24a93915d3522d4c51dd156f5fad6b229fb156355d4a9487a606133d6b29d45e48c20e008ba2a475ceda9cd7.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 2,
    title: 'Pizza',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-pizza-thumbnail.8d6b507e15ce3ecce9c3091c96cecf08373f175781d150d6cd95c423d267a8b8ceadab1395dd627f79c4853cb7f76748874f68eb239ef82845ebd0134f3992e2.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 3,
    title: 'Burger',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-burger-thumbnail.78bd73e505fe3b20af28c85b24803d5159b36306020ff7478ee86c7941577d67520fd5efa6e2c0cecce44ab45d78b8a04511bc1a2aff17c69234139756fee649.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 4,
    title: 'Korean',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-korean-thumbnail.069e7a0b3240ea33ddbe576565c43c9ee59bb5c08521ddd9a18ef5e1b06677edb1b78a7f0d9f1fb936459bd52de9ca8942ea92337852cc1911f148d5aa4c1c6a.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 5,
    title: 'Italian',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-italian-thumbnail.63df83b43b7dcfba1ee2bf20b2b6f2ba9905b869f1cc38203546d33025478541cec078add705462afde19dd64c157a54bfd9eed4cb0cb532ab90eb6fdb04b597.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 6,
    title: 'Bakery',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-bakery-thumbnail.a047aea402ae9f2c3cc832984b0525f433688bb17053e8336c17c60f226f95880fd8227f5208b11eaeea716b9cd0bfd84bac9c3ca71586bd06d3cec3b1a45fd9.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
  {
    id: 7,
    title: 'Coffee',
    image:
      'https://raster-static.postmates.com/?url=https%3A%2F%2Fbuyer-static-gcp.postmates.com%2Fdist%2Fprod%2Fcuisine-coffee-thumbnail.4b4d46ca0c77f73ba821ffafbb875f596d52bcfebb9ad786aa6581c28f08238b3589cd9695897f20e2b515a450c25d769649db51bdc239a7141cdb80ba9aa8a4.png&quality=85&w=460&h=0&mode=auto&format=webp&v=4',
  },
];

const CategoryListBlock = styled.div`
  position: relative;
  margin: 0 0 60px 0;
`;
const CategoryItemBanner = styled.li`

  /* height: 248px; */

  /* margin: 0 25px 0 0; */

  color: black;
  cursor: pointer;

  h4 {
    padding: 16px 0 0 0;
    font-size: 18px;
    font-weight: bold;
  }

  ${Media.desktop`
  margin: 0 18px 0 0;
  flex: 0 0 calc(20% - 10px);
  `}
  ${Media.tablet`
  margin: 0 26px 0 0;
  flex: 0 0 calc(25% - 12px);
  `}
  ${Media.mobile`
  margin: 0 26px 0 0;
  flex: 0 0 calc(25% - 12px);
  `}
`;

const CategoryImage = styled.div`
  width: 175px;
  height: 210px;

  background-image: url(${(props) => props.image || null});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Category = () => {
  return (
    <CategoryListBlock>
      <CategorySlider list={CategoryItemList}>
        {CategoryItemList.map((item) => (
          <CategoryItemBanner key={item.id} color={item.color}>
            <CategoryImage image={item.image} />
            <h4>{item.title}</h4>
          </CategoryItemBanner>
        ))}
      </CategorySlider>
    </CategoryListBlock>
  );
};

export default Category;
