import React from 'react';
import './Home.css';
import patagonia from '../../img/patagonia.jpg';
import Product from '../product/Product';
import jacket from '../../img/blue_jacket.webp';

function Home() {
  return (
    <div className='home'>
      <img src={patagonia} alt='' className='home__image' />
      <div className='home__container'>
        <div className='home__row'>
          <Product
            id='4903850'
            title='Nano Puff® Jacket'
            price={149.99}
            image={jacket}
          />
          <Product />
          <Product />
        </div>

        <div className='home__row'>
          <Product />
          <Product />
          <Product />
        </div>

        <div className='home__row'>
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
