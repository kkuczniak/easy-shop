import React from 'react';
import './Home.css';
import patagonia from '../../img/patagonia.jpg';
import Product from '../product/Product';
import jacket from '../../img/blue_jacket.webp';
import hat from '../../img/hat.webp';
import sleepingBag from '../../img/sleepingBag.webp';
import backpack from '../../img/backpack.webp';

function Home() {
  return (
    <div className='home'>
      <img src={patagonia} alt='' className='home__image' />
      <div className='home__container'>
        <div className='home__row'>
          <Product
            id='1'
            title='Nano Puff® Jacket'
            price={149.99}
            image={jacket}
          />
          <Product id='2' title='Nano Puff® Jacket' price={24.99} image={hat} />
          <Product
            id='3'
            title='Nano Puff® Jacket'
            price={199.99}
            image={sleepingBag}
          />
        </div>

        <div className='home__row'>
          <Product id='4' title='Hat' price={9.99} image={hat} />
          <Product
            id='5'
            title='Nano Puff® Jacket'
            price={99.99}
            image={sleepingBag}
          />
          <Product
            id='6'
            title='Retro PRuff® Backpack'
            price={499.99}
            image={backpack}
          />
        </div>

        <div className='home__row'>
          <Product
            id='7'
            title='Nano Staff® BackPack'
            price={149.99}
            image={backpack}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
