import React from 'react';

import './Basket.css';

const Basket = ({ imgUrl }) => (
  <div className='basket-container'>
    <img className='basket-img' src={imgUrl} alt='Basket' />
  </div>
);

export default Basket;
