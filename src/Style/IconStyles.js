import React from 'react';

// sub banner location icon
export const locationIconLarge = (
  <svg width="14" height="17">
    <g fill="none" fillRule="evenodd">
      <path
        d="M7 10a3 3 0 110-6 3 3 0 010 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
        fill="#8F95A3"
      />
      <path
        d="M7 16.362c4.35-3.483 6.5-6.616 6.5-9.362C13.5 3.324 10.638.5 7 .5A6.5 6.5 0 00.5 7c0 2.746 2.15 5.879 6.5 9.362z"
        stroke="#8F95A3"
      />
    </g>
  </svg>
);

// store individual 창 내 주소 button의 location icon
export const locationIconSmall = (
  <svg width="10" height="12">
    <path
      d="M5 12C1.667 9.5 0 7.125 0 4.875 0 2.183 2.239 0 5 0s5 2.183 5 4.875C10 7.125 8.333 9.5 5 12zm0-5a2 2 0 100-4 2 2 0 000 4z"
      fill="#8F95A3"
      fillRule="evenodd"
      fillOpacity=".592"
    />
  </svg>
);

// feed page Store 이름 옆 check 표시
export const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14">
    <g fill="none" fillRule="evenodd">
      <rect fill="#0C9" width="14" height="14" rx="7" />
      <path fill="#FFF" d="M3 7l3 3 4.5-4.5-1-1L6 8 4 6" />
    </g>
  </svg>
);

// 진한 돋보기 icon
export const searchIconDeep = (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path
      d="M11.75 10.335l3.32 3.322-1.413 1.414-3.322-3.32A6.48 6.48 0 016.5 13a6.5 6.5 0 115.25-2.665zM6.5 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
      fill="currentColor"
      opacity=".9"
      fillRule="evenodd"
    />
  </svg>
);

// 옅은 돋보기 icon
export const searchIconLight = (
  <svg width="14" height="14">
    <path
      stroke="#8F95A3"
      d="M13.243 12.936l.05-.05-3.419-3.419.266-.347A5.367 5.367 0 005.87.5h-.004a5.367 5.367 0 000 10.733h.004a5.344 5.344 0 003.606-1.391l.352-.32 3.414 3.414z"
      fill="none"
    />
  </svg>
);

// 큰 화살표 icon
export const arrowIconLarge = (
  <svg width="10" height="6">
    <path
      d="M0 1l1-1 4 4 4-4 1 1-5 5z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// 작은 화살표 icon
export const arrowIconSmall = (
  <svg width="7" height="5">
    <path
      d="M0 .71L.7 0l2.8 2.839L6.3 0l.7.71-3.5 3.548z"
      fill="#191919"
      fillRule="evenodd"
    />
  </svg>
);

// 시계모양 icon
export const watchIcon = (
  <svg width="12" height="12">
    <path
      d="M6 6V2H5v5h4V6H6zm0-6a6 6 0 110 12A6 6 0 016 0z"
      fill="#8F95A3"
      fillRule="evenodd"
      fillOpacity=".592"
    />
  </svg>
);

// close 아이콘
export const closeIcon = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <defs>
      <path
        id="icon-close_svg__a"
        d="M0 1.5L1.5 0 8 6.5 14.5 0 16 1.5 9.5 8l6.5 6.5-1.5 1.5L8 9.5 1.5 16 0 14.5 6.5 8z"
      />
    </defs>
    <use xlinkHref="#icon-close_svg__a" transform="translate(4 4)" />
  </svg>
);
