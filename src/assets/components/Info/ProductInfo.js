import React from 'react';

const ProductInfo = () => {
  return (
    <article className='info'>
      <div>
        <span className='company'></span>
        <span className='name'></span>
      </div>
      <div className='para'></div>
      <div className='item-price'>
        <div>
          <span className='curr-price'>$125</span>
          <span className='discount'>50%</span>
        </div>
        <div className='old-price'>$250.00</div>
      </div>
    </article>
  );
};

export default ProductInfo;
