import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import Media from '../../Style/Media';

const WrapperInfo = styled.div``;

const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 20px 0;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
`;

const ChangeButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  color: #00cc99;
`;

const InfoBox = styled.div``;

const InfoInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
`;

const CheckoutUserItem = ({ title, itemprops }) => {
  const inputRef = useRef();
  useEffect(() => {}, []);

  return (
    <WrapperInfo>
      <WrapperFlex>
        <InfoTitle>{title}</InfoTitle>
        <ChangeButton type="button">CHANGE</ChangeButton>
      </WrapperFlex>
      <InfoBox>
        <InfoInput value={itemprops} ref={inputRef} />
      </InfoBox>
    </WrapperInfo>
  );
};

export default CheckoutUserItem;
