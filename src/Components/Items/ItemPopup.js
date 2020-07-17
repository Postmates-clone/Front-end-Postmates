/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Textarea from 'react-textarea-autosize';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import { AddToCart } from '../../Style/BasicCounter';
import { ADD_TO_CART, CLEAR_CART } from '../../Modules/CartReducer';
import { CloseBtn } from '../../Style/PopUp';
import { closeIcon } from '../../Style/IconStyles';

const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity:1;
}
`;

const fadeOut = keyframes`
from{
  opacity: 1;
}
to{
  opacity:0;
}
`;

const slideUp = keyframes`
from{
  transform: translateY(200px)
}
to{
  transform: translateY(0px)
}
`;

const slideDown = keyframes`
from{
  transform: translateY(0px)
}
to{
  transform: translateY(200px)
}
`;

const OpacityBackground = styled.div`
  z-index: 1100;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; */
  transform: translateY(0%);
  transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  background: rgba(0, 0, 0, 0.1);

  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ImageBlock = styled.div`
  background-size: cover;
  width: 524px;
  height: 512px;
  background-position: center;
  background-repeat: no-repeat center;
  background-image: url(${(props) => props.image || null});
  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 0.15s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const DialogBlock = styled.div`
  width: 524px;
  height: 512px;
  padding: 35px;
  /* background-position: center; */
  justify-content: space-between;
  /* align-items: center; */
  overflow-y: scroll;

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    line-height: 1.33;
    margin: 16px 0 30px;
    color: #8f95a3;
  }

  animation-duration: 0.15s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ItemPopupWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
`;

// couter button
export const itemColor = {
  fontBlack: 'rgb(45, 49, 56)',
  fontGray: 'rgba(143, 149, 163, 0.9)',
  pointGreen: 'rgb(0, 204, 153)',
  lineGray: 'rgba(217, 219, 224, 0.5)',
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 2px solid ${itemColor.lineGray}; */
  padding-top: 20px;
`;

const AddToCartBlock = styled.div`
  max-width: 60%;
  button {
    font-weight: 400;
    font-size: 14px;
  }
`;

const CounterBlock = styled.div`
  display: inline-block;
  height: 54px;
  max-width: 40%;

  border: 1px solid ${itemColor.lineGray};
  border-radius: 30px;

  * {
    display: inline-block;
    height: 52px;
    padding: 10px;
    border: 0px;
    color: ${itemColor.fontBlack};
    font-family: 'Postmates Std', 'Helvetica Neue', sans-serif;
  }

  button {
    width: 61px;
    background-color: #fff;
    outline: none;
    border-radius: 30px;
    font-weight: bold;
  }
`;

const Increase = styled.button``;
const Decrease = styled.button`
  color: ${(props) => (props.active ? null : itemColor.fontGray)};
`;
const Value = styled.div`
  width: 30px;
`;

export const Counter = ({ active }) => {
  return (
    <CounterBlock>
      <Decrease active={active}>-</Decrease>
      <Value>1</Value>
      <Increase>+</Increase>
    </CounterBlock>
  );
};

const OptionCategoryBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;
const OptionCategoryName = styled.div``;

const OptionCategoryRequired = styled.div`
  color: rgb(143, 149, 163);
`;

const OptionDetailBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const OptionDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  width: 100%;
`;
const Input = styled.input`
  max-width: 10%;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:checked {
    background-color: rgb(45, 49, 56);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(45, 49, 56);
  }
`;
const OptionDetailName = styled.label`
  margin-left: 18px;
  max-width: 80%;
  text-align: left;
  font-size: 14px;
  font-weight: 200;
`;

const OptionDetailPrice = styled.div`
  color: rgb(143, 149, 163);
  max-width: 10%;
  margin-left: auto;
  text-align: right;
  font-size: 14px;
  font-weight: 200;
`;

const InstructionBorder = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 10px;
  border-top: 1px solid ${itemColor.lineGray};
  border-bottom: 1px solid ${itemColor.lineGray};
`;

const InstructionBlock = styled(Textarea)`
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 200;
  margin-top: 1rem;
  resize: none;
`;

const InstructionLength = styled.div`
  color: #ccc;
  font-size: 14px;
  padding: 5px;
  text-align: right;
`;
const getOptionsPrice = (options) => {
  const optionsList = Object.keys(options).map((key) => options[key]);

  return optionsList.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};

const ItemPopup = ({ item, visible, onCancel, onClick, active }) => {
  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);

  const onIncrease = () => setCount((_count) => _count + 1);
  const onDecrease = () => {
    if (count <= 1) return;
    setCount((_count) => _count - 1);
  };

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const [addInstruction, setAddInstruction] = useState('');
  const [checkedOption, setCheckedOption] = useState({});

  const { name, description, image_url, price, options } = item;

  const _onClick = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        count,
        instruction: addInstruction,
        options: checkedOption,
        totalPrice: (Number(price) + getOptionsPrice(checkedOption)) * count,
      },
    });
    if (addInstruction.lenght > 200) return;
    setAddInstruction('');
    onCancel();
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setAddInstruction(e.target.value);
  };

  const onChecked = (optionId, option) => {
    console.log('here', optionId, option);
    setCheckedOption((_checkedOption) => ({
      ..._checkedOption,
      [optionId]: option,
    }));
  };

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }
    // visible 값이 바뀔 때마다 localvisible 동기화
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;

  const totalPrice = (
    (Number(price) + getOptionsPrice(checkedOption)) *
    count
  ).toFixed(2);

  return (
    <OpacityBackground disappear={!visible}>
      <ItemPopupWrapper>
        {image_url && <ImageBlock image={image_url} />}
        <DialogBlock disappear={!visible}>
          <CloseBtn onClick={onCancel}>{closeIcon}</CloseBtn>
          <h1>{name}</h1>
          <p>{description}</p>
          {item.option_groups.map((option) => (
            <>
              <OptionCategoryBlock>
                <OptionCategoryName>{option.category}</OptionCategoryName>
                <OptionCategoryRequired>
                  {option.is_required === true && 'REQUIRED'}
                </OptionCategoryRequired>
              </OptionCategoryBlock>
              {option.options.map((opt) => (
                <OptionDetailBlock>
                  <OptionDetailInfo>
                    <Input
                      type="radio"
                      name={option.id}
                      key={opt.id}
                      id={opt.id}
                      value={opt.name}
                      onClick={() => onChecked(option.id, opt)}
                    />
                    <OptionDetailName>{opt.name}</OptionDetailName>
                    <OptionDetailPrice>
                      {opt.price ? `+$${opt.price.toFixed(2)}` : ''}
                    </OptionDetailPrice>
                  </OptionDetailInfo>
                </OptionDetailBlock>
              ))}
            </>
          ))}
          <h2
            style={{ marginTop: '50px', fontSize: '14px', fontWeight: 'bold' }}
          >
            SPECIAL INSTRUCTIONS
          </h2>
          <InstructionBorder>
            <InstructionBlock
              placeholder="Add Instructions..."
              minRows={3}
              maxRows={5}
              maxLength={200}
              name="body"
              value={addInstruction}
              onChange={onChange}
            />
          </InstructionBorder>
          <InstructionLength>{addInstruction.length}/200</InstructionLength>
          <ButtonGroup>
            {/* counter */}
            <CounterBlock>
              <Decrease active={active} onClick={onDecrease}>
                -
              </Decrease>
              <Value>{count}</Value>
              <Increase onClick={onIncrease}>+</Increase>
            </CounterBlock>
            <AddToCartBlock>
              <AddToCart
                active
                text="ADD TO CART"
                totalprice={`$${totalPrice}`}
                onClick={_onClick}
              />
            </AddToCartBlock>
          </ButtonGroup>
        </DialogBlock>
      </ItemPopupWrapper>
    </OpacityBackground>
  );
};

export default ItemPopup;
