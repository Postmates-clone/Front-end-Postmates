import styled from 'styled-components';
import { Green, White, DimGray } from '../Variables';

export const ButtonUi = styled.button`
  display: flex;
  width: 10.5rem; /*padding*/
  height: 3rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 28px;
  background-color: ${({ bgColor }) => bgColor || Green};
  color: ${({ Color }) => Color || White};
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  line-height: normal;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LargeButtonUi = styled(ButtonUi)`
  background-color: ${({ backgroundColor }) => backgroundColor || Green};
`;

export const SmallButtonUi = styled(ButtonUi)`
  width: 5.3rem;
  height: 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor || DimGray};
  }
`;
