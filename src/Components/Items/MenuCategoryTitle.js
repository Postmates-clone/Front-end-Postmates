import React from 'react';
import styled from 'styled-components';

const CategoryBlock = styled.h3`
  padding: 32px 0 16px 0;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  font-size: 21px;
  font-weight: 600;
`;

const MenuCategoryTitle = ({ category }) => {
  return <CategoryBlock>{category}</CategoryBlock>;
};

export default React.memo(MenuCategoryTitle);
