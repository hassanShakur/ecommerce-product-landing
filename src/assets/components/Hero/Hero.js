import React from 'react';
import HeroThumbs from './HeroThumbs';
import HeroImages from './HeroImages';

const Hero = ({handleModal}) => {
  return (
    <div className='hero'>
      <HeroImages handleModal={handleModal} />
      <HeroThumbs />
    </div>
  );
};

export default Hero;
