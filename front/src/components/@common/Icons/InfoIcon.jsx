import React from 'react';

const InfoIcon = (props) => {
  return (
    <svg
      aria-hidden='true'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      {...props}
    >
      <path
        fill='hsl(210,8%,45%)'
        d='M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z'
      ></path>
    </svg>
  );
};

export default InfoIcon;
