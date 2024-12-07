// src/components/integrations/FancyButtonDemo.tsx

import React from 'react';
import { motion } from 'framer-motion';

const FancyButtonDemo: React.FC = () => {
  const handleAction = () => alert('Fancy Button Clicked!');
  return (
    <motion.button
      onTap={handleAction}
      whileHover={{ scale: 1.05, boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)' }}
      whileTap={{ scale: 0.95 }}
      {...{className: "bg-magickPurple text-white px-6 py-3 rounded-full focus:outline-none" }}
    >
      Fancy Button
    </motion.button>
  );
};

export default FancyButtonDemo;
