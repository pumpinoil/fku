import React from 'react';

const InteractiveImage: React.FC = () => {
  return (
    <img
      src="/stylecard.jpg"
      alt="Magick Visual"
      className="w-full h-auto rounded-md transform transition duration-500 hover:scale-105 hover:blur-sm"
    />
  );
};

export default InteractiveImage;
