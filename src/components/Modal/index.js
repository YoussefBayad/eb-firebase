import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import './styles.scss';

const Modal = ({ showModal, toggleModal, children }) => {
  if (!showModal) return null;

  return (
    <AnimatePresence>
      <motion.div className="modalOverlay" onClick={() => toggleModal()} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="modal"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
