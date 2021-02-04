import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
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
