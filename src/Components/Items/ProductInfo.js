import React from 'react';
import styled from 'styled-components';

export default function ProductInfo({ title, text, buttonText }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}
