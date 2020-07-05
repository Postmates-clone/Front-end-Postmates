import React, { useState } from 'react';
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
      <CartPopup title="test" visible={cartDialog} onCancel={onCancel} />
    </div>
  );
};

export default Cart;
