import React from 'react';

import './Scene.css';
import Basket from './Basket/Basket';
import FruitsList from './FruitsList/FruitsList';

const Scene = ({ basketProducts, products }) => {
  const { basketId, total, ...chosenFruits } = basketProducts;
  const basketImgUrl = products[basketId].image_url;

  return (
    <div className='scene-container'>
      <Basket imgUrl={basketImgUrl} />
      <div className='scene-fruits-container'>
        <FruitsList
          basketProducts={basketProducts}
          fruitsKeys={Object.keys(chosenFruits)}
          products={products}
        />
      </div>
    </div>
  );
};

export default Scene;
