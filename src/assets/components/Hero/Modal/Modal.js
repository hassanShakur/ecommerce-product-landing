import React, { useState } from 'react';
import Hero from '../Hero';
import close from '../../../images/icon-close.svg';

const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div
      onClick={handleModal}
      className={`modal ${modalIsOpen ? 'open-modal' : ''}`}
    >
      <div>
        <img onClick={handleModal} className='close' src={close} alt='' />
        <Hero handleModal={handleModal}/>
      </div>
    </div>
  );
};

export default Modal;
