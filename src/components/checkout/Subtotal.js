import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Value Part  */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //TO DO
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
