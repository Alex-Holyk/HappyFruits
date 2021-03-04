import React from 'react';
import cn from 'classnames';

import './BasketItem.css';

const BasketItem = ({ item, selected, onClick }) => {
  return (
    <button
      className={cn('basket-item-button', selected && 'basked-item-selected')}
      onClick={() => onClick(item.id)}
    >
      <img className='basket-item-img' src={item.image_url} alt='Basket' />
    </button>
  );
};

export default BasketItem;
