import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CLEAR_CART } from '../../Modules/CartReducer';
import { loginUsersAsync, LOGIN_USER_ERROR } from '../../Modules/UserReducer';

const UserMenuBlock = styled.div`
  position: relative;
`;
const UserImage = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  margin: 20px 0;

  border-radius: 45px;
  border: 1px dashed rgb(217, 219, 224);

  background-color: rgb(236, 237, 239);
  /* background-image: url(${(props) => props.imgurl || null}); */
  /* background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; */
  cursor: pointer;
  svg {
    position: absolute;
    top: calc(50% - 16px);
    left: calc(50% - 16px);
  }
`;

const UserMainMenu = styled.div`
  position: absolute;
  top: 80px;
  /* left: 0; */
  right: -30px;
  z-index: 701;

  width: 215px;
  /* height: 200px; */

  background: #fff;
`;

const MenuList = styled.ul`
  padding: 0 15px;
  border: 1px solid rgba(217, 219, 224, 0.5);

  &:before {
    position: absolute;
    top: -16px;
    /* left: 10px; */
    right: 40px;

    content: '';
    border: 1px solid transparent;
    margin-left: -9px;
    border-bottom-color: #fff;
    border-width: 9px;
  }
`;
const MenuItem = styled.li`
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  a {
    padding: 0 3px;
    line-height: 59px;
  }
  /* &:last-child {
    border-bottom: 0px;
  } */
`;
const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 700;

  width: 100%;
  height: 100%;

  cursor: default;

  /* background-color: rgba(256, 256, 256, 0.63); */
`;

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuPopUp = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);
  const dispatch = useDispatch();

  const logOut = async () => {
    await dispatch(loginUsersAsync({ type: LOGIN_USER_ERROR }));
    await dispatch({ type: CLEAR_CART });
    closeMenu();
  };

  return (
    <UserMenuBlock>
      <UserImage onClick={openMenuPopUp}>
        <svg width="32" height="32" className="css-5rum3v eu6360k0">
          <g fill="none" fillRule="evenodd">
            <circle fill="#ECEDEF" cx="16" cy="16" r="16" />
            <path
              d="M12.886 10.824A3.222 3.222 0 0116.1 7.6a3.22 3.22 0 013.214 3.224v1.052A3.222 3.222 0 0116.1 15.1a3.22 3.22 0 01-3.214-3.224v-1.052zm3.214 6.419c5.357 0 7.5 2.143 7.5 2.143V22.6h-15v-3.214s2.143-2.143 7.5-2.143z"
              fill="#C6CAD1"
            />
          </g>
        </svg>
      </UserImage>
      {openMenu && (
        <>
          <UserMainMenu setState={setOpenMenu} openState={openMenu}>
            <MenuList>
              <Link to="/orderhistory">
                <MenuItem>Order History</MenuItem>
              </Link>
              <Link to="/account">
                <MenuItem>Account Settings</MenuItem>
              </Link>
              <Link to="/help">
                <MenuItem>Help Center</MenuItem>
              </Link>
              <MenuItem onClick={logOut}>Sign Out</MenuItem>
            </MenuList>
          </UserMainMenu>
          <Dimmed onClick={closeMenu} />
        </>
      )}
    </UserMenuBlock>
  );
};

export default UserMenu;
