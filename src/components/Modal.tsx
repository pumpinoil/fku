// src/components/Modal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2 } },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.div
          {...{className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onTap={onClose}
        >
          <motion.div
            {...{className: "bg-white rounded-lg p-6" }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onTap={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
