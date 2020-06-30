// //button
// import React from 'react';
// import { ButtonUi } from './Button.styles';
// const Button = ({ children, ...rest }) => {
//   return <ButtonUi {...rest}>{children}</ButtonUi>;
// };
// export default Button;
// //button style
// import styled from 'styled-components';
// import { font } from '../../styles/mixins';
// import { green100, blue400 } from '../../styles/variables';
// export const ButtonUi = styled.button`
//   ${font}
//   width: 200px;
//   height: 30px;
//   background-color: ${({ bgColor }) => bgColor || green100};
//   border-radius: 10px;
//   border: none;
// `;
// // 위 컴포넌트를 상속 받는다
// export const BigButtonUi = styled(ButtonUi)`
//   width: 400px;
//   height: 50px;
//   ${font({ size: 24, color: blue400 })}
// `;
// // big button으로 스타일링
// import React from 'react';
// import { BigButtonUi } from './Button.styles';
// const BigButton = ({ children, ...rest }) => {
//   return <BigButtonUi {...rest}>{children}</BigButtonUi>;
// };
// export default BigButton;
