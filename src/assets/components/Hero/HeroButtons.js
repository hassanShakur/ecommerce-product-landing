import React from 'react'
import next from '../../images/icon-next.svg';
import prev from '../../images/icon-previous.svg';

const HeroButtons = () => {
  return (
    <div className='hero-btns'>
      <button>
        <img src={prev} alt='prev button' />
      </button>
      <button>
        <img src={next} alt='next button' />
      </button>
    </div>
  );
}

export default HeroButtons