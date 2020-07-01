import { css } from 'styled-components';

// screen and (min-width: 1060px)
// screen and (max-width: 1059px) and (min-width: 768px)
// screen and (max-width: 767px)

const sizes = {
  desktop: 1060,
  tablet: 1059,
  mobile: 767,
};

// 미디어쿼리 객체 생성 함수
export default Object.keys(sizes).reduce((acc, label) => {
  // size가 desktop 일때는 min-width 적용
  if (label === 'desktop') {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `;
    // size가 desktop 이 아닐때는 max-width 적용
  } else {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `;
  }
  return acc;
}, {});
