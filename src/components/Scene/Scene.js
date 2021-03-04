import React from 'react';

import './Scene.css';
import Basket from './Basket/Basket';

const Scene = ({ basketProducts, products }) => {
  const basketImgUrl = products[basketProducts.basketId].image_url;

  return (
    <div className='scene-container'>
      <Basket imgUrl={basketImgUrl} />
    </div>
  );
};

export default Scene;
