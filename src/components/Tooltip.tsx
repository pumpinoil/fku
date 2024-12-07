// src/components/Tooltip.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className="relative flex items-center">
      {children}
      <AnimatePresence>
        <motion.span
          className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
