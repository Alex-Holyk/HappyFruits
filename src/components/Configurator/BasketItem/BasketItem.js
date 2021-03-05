import React from 'react';
import cn from 'classnames';
import ReactTooltip from 'react-tooltip';

import './BasketItem.css';

const BasketItem = ({ item, selected, onClick }) => {
  return (
    <>
      <button
        className={cn('basket-item-button', selected && 'basked-item-selected')}
        onClick={() => onClick(item.id)}
        data-for={`basket-${item.id}`}
        data-tip={`basket-${item.id}`}
      >
        <img className='basket-item-img' src={item.image_url} alt='Basket' />
      </button>
      <ReactTooltip
        id={`basket-${item.id}`}
        getContent={() => {
          return (
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          );
        }}
        effect='solid'
        place={'bottom'}
        border={true}
      />
    </>
  );
};

export default BasketItem;
