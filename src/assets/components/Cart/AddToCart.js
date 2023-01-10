import React from 'react'
import cart from '../../images/icon-cart.svg';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';


const AddToCart = () => {
  return (
    <div>
      <button>
        <span><img src={minus} alt="" /></span>
        <span className='items-number'>3</span>
        <span><img src={plus} alt="" /></span>
      </button>
      <button>
        <span><img src={cart} alt="cart" /></span>
        <span>Ass to cart</span>
      </button>
    </div>
  )
}

export default AddToCart