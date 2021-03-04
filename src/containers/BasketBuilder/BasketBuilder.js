import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BasketBuilder.css';
import Scene from '../../components/Scene/Scene';
import Configurator from '../../components/Configurator/Configurator';

const URL =
  'https://pocket-rocket-public.s3.eu-central-1.amazonaws.com/code-challenge/products.json';

const BasketBuilder = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get(URL);
      setProducts(result.data?.resources);
    };

    fetchProducts();
  }, []);

  return (
    <div className='basket-builder-container'>
      <Scene />
      <Configurator />
    </div>
  );
};

export default BasketBuilder;
