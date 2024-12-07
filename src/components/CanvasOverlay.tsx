// src/components/Canvas/CanvasOverlay.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause } from 'react-icons/fi';

interface CanvasOverlayProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const CanvasOverlay: React.FC<CanvasOverlayProps> = ({ isPlaying, togglePlay }) => {
  return (
    <div className="absolute top-4 right-4 z-40">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onTap={togglePlay}
        {...{className: "bg-gray-800 text-white p-3 rounded-full shadow-lg focus:outline-none" }}
      >
        {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
      </motion.button>
    </div>
  );
};

export default CanvasOverlay;
