import React from 'react';
import HeroThumbs from './HeroThumbs';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <div className='hero'>
      <HeroImages />
      <HeroThumbs />
    </div>
  );
};

export default Hero;
