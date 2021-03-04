import React from 'react';
import NumericInput from 'react-numeric-input';

import './Configurator.css';
import BasketItem from './BasketItem/BasketItem';
import FruitItem from './FruitItem/FruitItem';

const Configurator = ({
  products,
  basketProducts,
  setBasketProducts,
  onBasketSelect,
}) => {
  // debugger;
  return (
    <div className='configurator-container'>
      {Object.keys(products).map((keyName) => {
        if (products[keyName].type === 'Basket') {
          return (
            <BasketItem
              item={products[keyName]}
              selected={basketProducts.basket === products[keyName].id}
              onClick={onBasketSelect}
            />
          );
        }

        return <FruitItem item={products[keyName]} />;
      })}
    </div>
  );
};

export default Configurator;
