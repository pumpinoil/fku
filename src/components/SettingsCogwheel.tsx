// src/components/SettingsCogwheel.tsx

import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface SettingsCogwheelProps {
  onClick: () => void;
}

const SettingsCogwheel: React.FC<SettingsCogwheelProps> = ({ onClick }) => {
  return (
    <motion.button
          onTap={onClick}
          {...{className: "settings-cogwheel" }}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
          >
          <FiSettings size={24} color="#fff" />
    </motion.button>
  );
};

export default SettingsCogwheel;
