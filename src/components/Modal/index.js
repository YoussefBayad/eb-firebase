import React from 'react';
import './styles.scss';

const Modal = ({ showModal, toggleModal, children }) => {
  if (!showModal) return null;

  return (
    <>
      <div className="modalOverlay" onClick={() => toggleModal()} />
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
