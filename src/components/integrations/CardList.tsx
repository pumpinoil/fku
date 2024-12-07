// src/components/CardList.tsx
import React from 'react';
import AnimatedCard from './AnimateCard';

const CardList: React.FC = () => {
  return (
    <div className="space-y-4">
      <AnimatedCard>
        <h2 className="text-xl font-bold">Card Title</h2>
        <p className="mt-2">This is a beautifully animated card.</p>
      </AnimatedCard>
      {/* Add more AnimatedCards as needed */}
    </div>
  );
};

export default CardList;
