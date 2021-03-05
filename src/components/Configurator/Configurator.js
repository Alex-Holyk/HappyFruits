import React from 'react';

import './Configurator.css';
import BasketItem from './BasketItem/BasketItem';
import FruitItem from './FruitItem/FruitItem';

const Configurator = ({
  baskets,
  fruits,
  basketProducts,
  onBasketSelect,
  onFruitCountChange,
}) => {
  return (
    <div className='configurator-container'>
      <div className='basket-buttons-container'>
        {baskets.map((basket) => (
          <BasketItem
            key={basket.id}
            item={basket}
            selected={basketProducts.basketId === basket.id}
            onClick={onBasketSelect}
          />
        ))}
      </div>
      {fruits.map((fruit) => (
        <FruitItem
          key={fruit.id}
          item={fruit}
          onChange={onFruitCountChange}
          basketProducts={basketProducts}
        />
      ))}
      <div>Total price: {basketProducts.total}</div>
    </div>
  );
};

export default Configurator;
