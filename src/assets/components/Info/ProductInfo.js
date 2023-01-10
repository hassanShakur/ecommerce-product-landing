import React from 'react';

const ProductInfo = () => {
  return (
    <article className='info'>
      <div>
        <span className='company'>Sneaker Company</span>
        <span className='name'>Fall Limited Edition Sneakers</span>
      </div>
      <div className='para'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </div>
      <div className='item-price'>
        <div>
          <span className='curr-price'>$125.00</span>
          <span className='discount'>50%</span>
        </div>
        <div className='old-price'>$250.00</div>
      </div>
    </article>
  );
};

export default ProductInfo;
