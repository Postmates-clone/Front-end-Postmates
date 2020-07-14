/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Media from './Media';

const BasicButton = styled.button`
  display: inline-block;

  min-width: 120px;
  width: ${(props) => props.width || null};
  height: 48px;

  margin: 0 5px 0 0;
  padding: 0 47px;

  border: 0px;
  border-radius: 28px;

  background-color: ${(props) => (props.active ? '#00CC99' : '#D9DBE0')};

  span {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.72px;
  }

  /* ${Media.desktop`

  `} */

  ${Media.tablet`
  width: ${(props) => props.twidth || null};
  `}

  ${Media.mobile`
  width: ${(props) => props.mwidth || null};
  `}
`;

const IconButton = styled.button`
  display: inline-block;

  min-width: 120px;
  width: ${(props) => props.width || null};
  height: 48px;

  margin: 0 5px 0 0;
  padding: 0 24px;

  border: 0px;
  border-radius: 28px;

  background-color: ${(props) => (props.active ? '#00CC99' : '#D9DBE0')};

  .svg {
    display: inline-block;
    margin-top: -3px;
    vertical-align: middle;
  }
  span {
    margin-left: 8px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.72px;
    line-height: 48px;
  }
`;

const LoginButton = styled.button`
  display: inline-block;
  min-width: 86px;
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || '32px'};

  margin: 0 5px 0 0;
  padding: 0 16px;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 28px;

  color: ${(props) => (props.active ? '#2D3138' : '#FFF')};
  background-color: ${(props) => (props.active ? 'transparent' : '#2D3138')};

  span {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.72px;
  }

  /* ${Media.desktop`

  `} */

  ${Media.tablet`
  width: ${(props) => props.twidth || null};
  `}

  ${Media.mobile`
  min-width: 76px;
  height: 34px;
  width: ${(props) => props.mwidth || null};
  `}
`;

export function BasicBtn({ active, width, twidth, mwidth, text, ...rest }) {
  return (
    <BasicButton
      active={active}
      width={width}
      twidth={twidth}
      mwidth={mwidth}
      {...rest}
    >
      <span>{text}</span>
    </BasicButton>
  );
}

const svgIconList = {
  android: (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.999 8.189a1.312 1.312 0 10-2.624 0v5.496a1.312 1.312 0 102.625 0l-.001-5.496zM3.134 7.126l.002 8.518c0 .774.626 1.4 1.4 1.4h.954l.001 2.908a1.313 1.313 0 002.625 0l-.001-2.908h1.772v2.907a1.313 1.313 0 002.625 0v-2.908h.957a1.4 1.4 0 001.4-1.401V7.124l-11.735.002zm8.557-2.6a.495.495 0 11-.001-.99.495.495 0 010 .99zm-5.383.002a.496.496 0 11.003-.992.496.496 0 01-.003.992zm5.588-2.585L12.812.27a.183.183 0 00-.072-.248.182.182 0 00-.247.073l-.925 1.69a6.297 6.297 0 00-2.572-.54 6.3 6.3 0 00-2.565.537L5.505.097a.18.18 0 00-.247-.073.18.18 0 00-.072.247l.916 1.671c-1.8.929-3.017 2.697-3.016 4.728l11.822-.002c0-2.03-1.214-3.794-3.012-4.725zM1.312 6.878C.588 6.878 0 7.466 0 8.191l.001 5.496a1.312 1.312 0 102.625 0V8.19c0-.724-.589-1.312-1.314-1.312z"
        fill="#fff"
      />
    </svg>
  ),
  apple: (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.904 0c.128 1.163-.333 2.31-1.007 3.152-.703.83-1.828 1.464-2.923 1.382-.144-1.12.411-2.31 1.033-3.035C9.709.675 10.928.043 11.904 0zm3.586 6.71c-.123.073-2.149 1.282-2.126 3.748.025 2.978 2.604 3.962 2.636 3.973-.015.07-.404 1.42-1.371 2.793-.808 1.208-1.655 2.389-2.999 2.41-.64.015-1.07-.169-1.52-.36-.47-.2-.958-.408-1.723-.408-.81 0-1.321.215-1.814.422-.425.18-.837.353-1.418.377-1.28.047-2.259-1.29-3.096-2.487C.386 14.733-.917 10.289.829 7.265c.847-1.483 2.39-2.438 4.04-2.463.726-.015 1.423.265 2.034.51.467.188.884.355 1.225.355.3 0 .705-.16 1.177-.348.744-.295 1.655-.657 2.582-.559.635.019 2.44.25 3.605 1.949l-.002.001z"
        fill="#fff"
      />
    </svg>
  ),
};

// 희진: rest 추가

export function IconBtn({ active, width, text, icon, ...rest }) {
  return (
    <IconButton active={active} width={width} {...rest}>
      <div className="svg">
        {icon === 'android' ? svgIconList.android : svgIconList.apple}
      </div>
      <span>{text}</span>
    </IconButton>
  );
}

export function LoginBtn({
  height,
  active,
  width,
  twidth,
  mwidth,
  text,
  ...rest
}) {
  return (
    <LoginButton
      active={active}
      width={width}
      height={height}
      twidth={twidth}
      mwidth={mwidth}
      {...rest}
    >
      <span>{text}</span>
    </LoginButton>
  );
}
