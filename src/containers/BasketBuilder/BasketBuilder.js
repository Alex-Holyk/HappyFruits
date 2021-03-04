import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BasketBuilder.css';
import Scene from '../../components/Scene/Scene';
import Configurator from '../../components/Configurator/Configurator';
import { mapProductsToObject, getDefaultBasket } from './utils';

const URL =
  'https://pocket-rocket-public.s3.eu-central-1.amazonaws.com/code-challenge/products.json';

const BasketBuilder = () => {
  const [products, setProducts] = useState({});
  const [basketProducts, setBasketProducts] = useState({});

  useEffect(() => {
    const initProducts = async () => {
      const result = await axios.get(URL);
      const products = result.data?.resources;
      const mappedProducts = mapProductsToObject(products);
      const defaultBasket = getDefaultBasket(products);
      setProducts(mappedProducts);
      setBasketProducts({ basket: defaultBasket });
    };

    initProducts();
  }, []);

  const basketSelectHandler = (basketId) => {
    const updatedBasketProducts = { ...basketProducts };
    updatedBasketProducts.basket = basketId;
    setBasketProducts(updatedBasketProducts);
  };

  return (
    <div className='basket-builder-container'>
      <Scene products={products} basketProducts={basketProducts} />
      <Configurator
        products={products}
        basketProducts={basketProducts}
        setBasketProducts={setBasketProducts}
        onBasketSelect={basketSelectHandler}
      />
    </div>
  );
};

export default BasketBuilder;
