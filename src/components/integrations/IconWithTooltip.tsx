// src/components/integrations/IconWithTooltipDemo.tsx

import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const IconWithTooltipDemo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative inline-block p-4 text-white">
      <FiInfo
        size={20}
        className="cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:10 }}
          >
            More Information
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IconWithTooltipDemo;
