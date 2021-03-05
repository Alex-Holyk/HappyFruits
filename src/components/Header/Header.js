import React from 'react';

import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='Logo' />
    </header>
  );
};

export default Header;
