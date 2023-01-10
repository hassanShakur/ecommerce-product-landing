import React from 'react';
import logo from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import cart from '../../images/icon-cart.svg';
import menu from '../../images/icon-menu.svg';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className='header'>
      <div className='links'>
        <img id='menu' src={menu} alt='menu' />
        <img id='logo' src={logo} alt='Sneakers logo' />
        <NavLinks />
      </div>
      <div className='profile'>
        <img src={cart} alt='cart' />
        <img id='avatar' src={avatar} alt='customer avatar' />
      </div>
    </header>
  );
};

export default Header;
