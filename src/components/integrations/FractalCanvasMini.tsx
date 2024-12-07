// src/components/integrations/FractalCanvasMini.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface FractalCanvasMiniProps {
  fractalParam?: number;
}

const FractalCanvasMini: React.FC<FractalCanvasMiniProps> = ({ fractalParam = 1 }) => {
  const size = 1 + fractalParam * 0.5;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0,0,5], fov: 60 }}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10,10,10]} />
        <OrbitControls enableZoom={false} />
        <mesh>
          <boxBufferGeometry args={[size,size,size]} />
          <meshStandardMaterial color="#6B46C1" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default FractalCanvasMini;
