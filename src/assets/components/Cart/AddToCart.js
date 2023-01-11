import React from 'react';
import cart from '../../images/icon-cart-btn.svg';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';

const AddToCart = () => {
  return (
    <div className='add-cart'>
      <button className='controls'>
        <span>
          <img src={minus} alt='' />
        </span>
        <span className='items-number'>3</span>
        <span>
          <img src={plus} alt='' />
        </span>
      </button>
      <button className='add'>
        <span>
          <img src={cart} alt='cart' />
        </span>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
