import React from 'react';
import product_1_thumb from '../../images/image-product-1-thumbnail.jpg';
import product_2_thumb from '../../images/image-product-2-thumbnail.jpg';
import product_3_thumb from '../../images/image-product-3-thumbnail.jpg';
import product_4_thumb from '../../images/image-product-4-thumbnail.jpg';

const HeroThumbs = () => {
  return (
    <div className='hero-thumbs'>
      <img src={product_1_thumb} alt='thumbnail-1' />
      <img src={product_2_thumb} alt='thumbnail-2' />
      <img src={product_3_thumb} alt='thumbnail-3' />
      <img src={product_4_thumb} alt='thumbnail-4' />
    </div>
  );
};

export default HeroThumbs;
