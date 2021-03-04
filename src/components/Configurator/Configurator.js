import React from 'react';
import NumericInput from 'react-numeric-input';

import './Configurator.css';
import BasketItem from './BasketItem/BasketItem';
import FruitItem from './FruitItem/FruitItem';

const Configurator = ({ baskets, fruits, basketProducts, onBasketSelect }) => {
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
      {/* {fruits.map((keyName) => {
        if (products[keyName].type === 'Basket') {
          return (
            <BasketItem
              key={keyName}
              item={products[keyName]}
              selected={basketProducts.basketId === products[keyName].id}
              onClick={onBasketSelect}
            />
          );
        }
        return <FruitItem key={keyName} item={products[keyName]} />;
      })} */}
      <div>{basketProducts.total}</div>
    </div>
  );
};

export default Configurator;
