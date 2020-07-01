// //button style
// import styled from 'styled-components';
// import { font } from '../../styles/mixins';
// import { green100, blue400 } from '../../styles/variables';
// export const ButtonUi = styled.button`
//   ${font}
//   /* width: ${({ type }) => (type == 'big' ? '300px' : '200px')} */
//   width: 200px;
//   height: 30px;
//   background-color: ${({ bgColor }) => bgColor || green100};
//   border-radius: 10px;
//   border: none;
// `;

// //button
// import React from 'react';
// // import { ButtonUi } from './Button.styles';
// const Button = ({ children, ...rest }) => {
//   return <ButtonUi {...rest}>{children}</ButtonUi>;
// };

// export default Button;

// // 위 컴포넌트를 상속 받는다
// export const BigButtonUi = styled(ButtonUi)`
//   width: 10px;
//   height: 50px;
//   background-color: ${({ backgroundColor }) => backgroundColor || '#333'};
//   ${font({ size: 24, color: blue400 })}
// `;

// // big button으로 스타일링
// import React from 'react';
// import { BigButtonUi } from './Button.styles';
// const BigButton = ({ children, ...rest }) => {
//   return <BigButtonUi {...rest}>{children}</BigButtonUi>;
// };
// export default BigButton;

// //메인페이지 헤더 쪽에서 사용할 때

// const App = () => {
//   return (
//     <BigButton backgroundColor={DarkGrey}>
//       <p>태그들이 들어가고</p>
//     </BigButton>
//   );
// };
