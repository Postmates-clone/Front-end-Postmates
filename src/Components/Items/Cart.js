import React, { useState } from 'react';
import { BasicBtn } from '../../Style/BasicBtn';
import CartPopup from './CartPopup';

const Cart = () => {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onCancel = () => {
    setDialog(false);
  };
  return (
    <div>
      <BasicBtn onClick={onClick} active text="cart" />
      <CartPopup
        title="test"
        // eslint-disable-next-line react/no-children-prop
        children="testtesttest"
        visible={dialog}
        onCancel={onCancel}
      />
    </div>
  );
};

export default Cart;
