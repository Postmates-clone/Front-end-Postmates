/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';

const PastOrderBlock = styled.li`
  display: flex;
  padding: 20px 0;

  width: 100%;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  cursor: pointer;

  ${Media.mobile`
    padding: 20px 15px;
  `}
`;

const StoreImage = styled.div`
  flex-grow: 0;
  width: 48px;
  height: 48px;

  background-image: url(${(props) => props.logo || null});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const OrderInfo = styled.div`
  flex-grow: 1;
  width: calc(100% - 350px);
  padding: 0 20px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    color: rgb(45, 49, 56);
    margin: 0 0 10px 0;
  }
`;
const OrderMenus = styled.div`
  width: calc(100% - 100px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: rgb(143, 149, 163);
  font-size: 14px;
  font-weight: 200;

  ${Media.tablet`
    width: calc(100% - 30px);
  `}

  ${Media.mobile`
    width: calc(100% - 30px);
  `}
`;
const OrderDate = styled.div`
  margin: 11px 0 0 0;
  color: rgb(143, 149, 163);

  font-size: 14px;
  font-weight: 200;
`;

const GetItAgainBtn = styled.button`
  flex-grow: 0;
  min-width: 86px;
  height: 38px;

  margin: 10px 0 0 0;
  padding: 0 16px;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 28px;

  background-color: #fff;

  span {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.72px;
  }

  svg {
    display: none;
  }
  &:hover {
    color: #fff;
    background-color: #00cc99;

    border: 1px solid #00cc99;
  }

  ${Media.desktop`
    display: ${(props) => (props.viewBtn ? 'block' : 'none')};
  `}

  ${Media.tablet`
    display: block;
  `}

  ${Media.mobile`
    display: block;

    min-width: 38px;
    margin: 15px 0 0 0;
    padding: 0 10px;

    svg {
    display: block;
    
    }
    span {
      display: none;
    }
  `}
`;

const PastOrder = ({ id, name, logo, date, orderedmenus }) => {
  const [viewBtn, setViewBtn] = useState(false);

  let orderMenuList = '';
  orderedmenus.map((order) => {
    orderMenuList += `${order.name} : `;
    order.options.map((option) => {
      orderMenuList += `(option: ${option.name}), `;
    });
  });

  const onMouseEnter = () => setViewBtn(true);
  const onMouseLeave = () => setViewBtn(false);
  // console.log(orderedmenus);
  // console.log(orderMenuList);
  // console.log(viewBtn);
  return (
    <PastOrderBlock
      key={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StoreImage logo={logo} />
      <OrderInfo>
        <h3>{name}</h3>
        <OrderMenus>{orderMenuList}</OrderMenus>
        <OrderDate>Completed {date}</OrderDate>
      </OrderInfo>
      <GetItAgainBtn viewBtn={viewBtn}>
        <span>GET IT AGAIN</span>
        <svg width="18" height="19">
          <g fill="currentColor" fillRule="evenodd">
            <path
              d="M14.023 2.531L12.845 4.15a7 7 0 102.877 7.808l1.878.704a9 9 0 11-3.577-10.131z"
              fillRule="nonzero"
            />
            <path d="M16.471 5.69l-5.587.886L15.586.103z" />
          </g>
        </svg>
      </GetItAgainBtn>
    </PastOrderBlock>
  );
};

export default PastOrder;
