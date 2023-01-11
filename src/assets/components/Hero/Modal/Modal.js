import React from 'react';
import Hero from '../Hero';
import close from '../../../images/icon-close.svg';


const Modal = () => {
  return (
    <div className='modal open-modal'>
      <div>
        <img className='close' src={close} alt="" />
        <Hero />
      </div>
    </div>
  );
};

export default Modal;
