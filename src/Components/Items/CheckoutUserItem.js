import React, { useRef, useEffect, useState } from 'react';
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
  text-indent: 30px;
  position: relative;
  z-index: ${(props) => props.zindex};
`;

const CheckoutUserItem = ({ title, itemprops }) => {
  const [change, setChange] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = itemprops;
  }, [itemprops]);

  const possibleChange = () => {
    setChange(!change);
  };

  return (
    <WrapperInfo>
      <WrapperFlex>
        <InfoTitle>{title}</InfoTitle>
        <ChangeButton type="button" onClick={possibleChange}>
          {change ? 'SAVE' : 'CHANGE'}
        </ChangeButton>
      </WrapperFlex>
      <InfoBox>
        <InfoInput ref={inputRef} zindex={change ? 0 : -1} />
      </InfoBox>
    </WrapperInfo>
  );
};

export default CheckoutUserItem;
