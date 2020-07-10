import React, { useState } from 'react';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
import { LoginBtn } from '../../Style/BasicBtn';
import CartPopup from './CartPopup';

const Cart = () => {
  const [cartDialog, setCartDialog] = useState(false);

  const onClick = () => {
    setCartDialog(true);
  };

  const onCancel = () => {
    setCartDialog(false);
  };
  return (
    <div style={{ position: 'relative' }}>
      <LoginBtn onClick={onClick} active text="ITEMS" />
      <CartPopup visible={cartDialog} onCancel={onCancel} />
    </div>
  );
};

export default Cart;
