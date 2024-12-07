// src/components/OptionsMenu/OptionsMenu.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface OptionsMenuProps {
  isVisible: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const MenuContainer = styled(motion.div)`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.1); /* More transparent */
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const OptionsMenu: React.FC<OptionsMenuProps> = ({ isVisible, onEdit, onDelete }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <MenuContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: 'auto' }} // Enable interactions within the menu
        >
          <button onClick={onEdit} className="text-white hover:text-yellow-300">
            <FiEdit size={20} />
          </button>
          <button onClick={onDelete} className="text-white hover:text-red-500">
            <FiTrash2 size={20} />
          </button>
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};

export default OptionsMenu;
