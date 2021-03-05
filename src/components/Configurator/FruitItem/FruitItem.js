import React from 'react';
import NumericInput from 'react-numeric-input';

import './FruitItem.css';

const FruitItem = ({ item, onChange, basketProducts }) => (
  <div className='fruit-item-container'>
    <div className='fruit-info-container'>
      <img className='fruit-item-img' src={item.image_url} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </div>
    <div className='fruit-selling-info-container'>
      <div>
        <p>In stock: {item.in_stock}</p>
        <p>
          Price per {item.unit}: {item.price}
        </p>
      </div>
      <div>
        <NumericInput
          mobile
          min={0}
          max={item.in_stock}
          value={basketProducts[item.id]?.count || 0}
          onChange={(value) => onChange(item, value)}
        />
        <p>Total: {basketProducts[item.id]?.total || 0}</p>
      </div>
    </div>
  </div>
);

export default FruitItem;
