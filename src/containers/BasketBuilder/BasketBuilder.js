import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BasketBuilder.css';
import Scene from '../../components/Scene/Scene';
import Configurator from '../../components/Configurator/Configurator';
import { mapProductsToObject, getItemsByType, calculateTotal } from './utils';

const URL =
  'https://pocket-rocket-public.s3.eu-central-1.amazonaws.com/code-challenge/products.json';

const BasketBuilder = () => {
  const [fruits, setFruits] = useState(null);
  const [baskets, setBaskets] = useState(null);
  const [products, setProducts] = useState({});
  const [basketProducts, setBasketProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initState = async () => {
      const result = await axios.get(URL);
      const fetchedProducts = result.data?.resources;
      const mappedProducts = mapProductsToObject(fetchedProducts);
      const baskets = getItemsByType(fetchedProducts, 'Basket');
      const fruits = getItemsByType(fetchedProducts, 'Fruit');

      setFruits(fruits);
      setBaskets(baskets);
      setProducts(mappedProducts);
      setBasketProducts({ basketId: baskets[0].id, total: baskets[0].price });
      setIsLoading(false);
    };

    initState();
  }, []);

  const basketSelectHandler = (basketId) => {
    const updatedBasketProducts = { ...basketProducts };
    updatedBasketProducts.basketId = basketId;
    updatedBasketProducts.total = calculateTotal(
      basketProducts.total,
      products[basketProducts.basketId].price,
      products[basketId].price
    );
    setBasketProducts(updatedBasketProducts);
  };

  return (
    <div className='basket-builder-container'>
      {!isLoading ? (
        <>
          <Scene basketProducts={basketProducts} products={products} />
          <Configurator
            // products={products}
            baskets={baskets}
            fruits={fruits}
            basketProducts={basketProducts}
            // setBasketProducts={setBasketProducts}
            onBasketSelect={basketSelectHandler}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BasketBuilder;
