import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import './styles.scss';

const Modal = ({ showModal, toggleModal, children }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="modalOverlay"
            onClick={() => toggleModal()}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="modal"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
