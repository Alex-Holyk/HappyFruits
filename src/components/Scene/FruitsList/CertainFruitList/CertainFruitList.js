import React from 'react';

import './CertainFruitList.css';

const CertainFruitList = ({ item, basketItem }) => {
  const arrayByQuantity = [...Array(basketItem.count).keys()];

  return arrayByQuantity.map((_, index) => {
    return (
      <div key={index} className='certain-fruit-container'>
        <img className='scene-fruit-img' src={item.image_url} alt={item.name} />
      </div>
    );
  });
};

export default CertainFruitList;
