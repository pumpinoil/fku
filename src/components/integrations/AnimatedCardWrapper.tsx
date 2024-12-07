import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardWrapperProps {
  content: string;
}

const AnimatedCardWrapper: React.FC<AnimatedCardWrapperProps> = ({ content }) => {
  return (
    <motion.div
      {...{className: "bg-white text-black shadow-lg rounded-md p-6" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </motion.div>
  );
};

export default AnimatedCardWrapper;
