// src/components/FractalCanvas.tsx

import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { MagickCardProps } from '../../types/magickCard';
import MagickCard from './MagickCard';
import CanvasOverlay from '../CanvasOverlay';
import { AmbientLight } from 'three/src/Three.js';



interface FractalCanvasProps {
  onCardSelect: (id: string) => void;
}

const FractalCanvas: React.FC<FractalCanvasProps> = ({ onCardSelect }) => {
  const cards = useSelector((state: { cards: MagickCardProps[] }) => state.cards);
  const [isPlaying, setIsPlaying] = React.useState(true);

  useEffect(() => {
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.warn('WebGL context lost');
      // Implement any recovery logic if necessary
    };

    const handleContextRestored = () => {
      console.info('WebGL context restored');
      // Reinitialize or reload resources if necessary
    };

    window.addEventListener('webglcontextlost', handleContextLost);
    window.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost);
      window.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);

  const handleCardSelect = (id: string) => {
    onCardSelect(id);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    // Implement play/pause functionality as needed
  };

  return (
    <>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 15], fov: 60 }}
      >
        <AmbientLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Render MagickCards */}
        {cards.map((card: MagickCardProps) => (
          <MagickCard key={card.id} card={card} onSelect={() => handleCardSelect(card.id)} />
        ))}

        {/* Additional 3D Objects or Effects */}
      </Canvas>
      <CanvasOverlay isPlaying={isPlaying} togglePlay={togglePlay} />
    </>
  );
};

export default FractalCanvas;
