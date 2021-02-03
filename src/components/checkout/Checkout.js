import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
        </div>
      </div>
      <div className='checkout__right'>
        <h2>The subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
