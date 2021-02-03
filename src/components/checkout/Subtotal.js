import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Value Part  */}
              Subtotal (0 items): <strong>0</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0} //TO DO
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
