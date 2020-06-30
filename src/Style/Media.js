import { css } from 'styled-components';

const sizes = {
  desktop: 768,
  tablet: 768,
  phone: 600,
};

export default Object.keys(sizes).reduce((acc, label) => {
  if (label === 'desktop') {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `;
  } else {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `;
  }

  console.log(acc);
  return acc;
}, {});
