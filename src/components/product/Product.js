import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';

function Product({ title, image, price, id }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log('this is basket', basket);

  const addToBasket = () => {
    // dispatch item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>{price}€</strong>
        </p>
      </div>
      <button onClick={addToBasket}>Add to Bag</button>
    </div>
  );
}

export default Product;
