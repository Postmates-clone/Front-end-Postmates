import { css } from 'styled-components';

export const font = ({ size = 16, color = 'white' }) => css`
  font-size: ${size}px;
  color: ${color};
`;
export const smallText = () => font({ size: 10 });
export const yellowText = () => font({ color: 'yellow' });
