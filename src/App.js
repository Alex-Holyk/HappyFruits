import React from 'react';

import BasketBuilder from './containers/BasketBuilder/BasketBuilder';
import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <BasketBuilder />
    </div>
  );
};

export default App;
