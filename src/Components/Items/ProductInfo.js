import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function ProductInfo({ title, text, buttonText }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button">{buttonText}</button>
    </div>
  );
}
