import React from 'react';
import AddToCart from '../Cart/AddToCart'

const SideInfo = () => {
  return (
    <div className='side-hero'>
      <h5 className='company'>Sneaker Company</h5>
      <h1 className='name'>Fall Limited Edition Sneakers</h1>
      <p className='para'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='item-price'>
        <div>
          <span className='curr-price'>$125.00</span>
          <span className='discount'>50%</span>
        </div>
        <div className='old-price'>$250.00</div>
      </div>

      <AddToCart />
    </div>
  );
};

export default SideInfo;
