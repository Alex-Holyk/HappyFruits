import React from 'react';
import cn from 'classnames';

const BasketItem = ({ item, selected, onClick }) => {
  return (
    <button
      className={cn('basket-button', selected && 'selected')}
      onClick={() => onClick(item.id)}
    >
      BasketItem
    </button>
  );
};

export default BasketItem;
