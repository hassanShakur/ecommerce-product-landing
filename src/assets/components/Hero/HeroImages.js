import React from 'react';
import HeroButtons from './HeroButtons';
import product_1 from '../../images/image-product-1.jpg';
import product_2 from '../../images/image-product-2.jpg';
import product_3 from '../../images/image-product-3.jpg';
import product_4 from '../../images/image-product-4.jpg';


const HeroImages = () => {
  return (
    <>
      <div className='hero-images'>
        <img src={product_1} alt='product-1' className='active'/>
        <img src={product_2} alt='product-2' />
        <img src={product_3} alt='product-3' />
        <img src={product_4} alt='product-4' />
      </div>
      <HeroButtons />
    </>
  );
};

export default HeroImages;
