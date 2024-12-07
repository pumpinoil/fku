// src/components/SettingsModal.tsx
import React from 'react';
import Modal from './Modal';
import { FiX } from 'react-icons/fi';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <button onClick={onClose}>
          <FiX size={24} />
        </button>
      </div>
      {/* Settings Content */}
      <div>
        <label className="block text-gray-700">Option 1</label>
        <input type="checkbox" className="mt-1" />
      </div>
      {/* Add more settings as needed */}
    </Modal>
  );
};

export default SettingsModal;
