import React from 'react';
import logo from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import cart from '../../images/icon-cart.svg';
import menu from '../../images/icon-menu.svg';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img src={menu} alt='menu' />
        <img src={logo} alt='Sneakers logo' />
      </div>
      <div>
        <img src={cart} alt='cart' />
        <img src={avatar} alt='customer avatar' />
      </div>
    </header>
  );
};

export default Header;
