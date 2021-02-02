import React from 'react';
import './Product.css';
import jacket from '../../img/blue_jacket.webp';

function Product({ title, image, price }) {
  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>{price}€</strong>
        </p>
      </div>
      <button>Add to Bag</button>
    </div>
  );
}

export default Product;
