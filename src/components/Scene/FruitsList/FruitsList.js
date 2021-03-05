import React from 'react';

import CertainFruitList from './CertainFruitList/CertainFruitList';

const FruitsList = ({ basketProducts, fruitsKeys, products }) =>
  fruitsKeys.map(
    (keyName) =>
      basketProducts[keyName].count > 0 && (
        <CertainFruitList
          key={keyName}
          item={products[keyName]}
          basketItem={basketProducts[keyName]}
        />
      )
  );

export default FruitsList;
