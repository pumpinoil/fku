// src/components/integrations/Dashboard.tsx

import React from 'react';
import MagickButton from '../MagickButton';
import GlassCard from '../GlassCard';

const Dashboard: React.FC = () => {
  const handleAction = () => {
    console.log('Magick Button Clicked!');
  };

  // Fully specifying required card properties
  const cardProps1 = {
    id: '1',
    content: 'Card Content',
    opacity: 0.5,
    imageOpacity: 0.5,
    blur: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderOpacity: 0.8,
    borderColor: '#000',
    glowEffect: false,
    glowColor: '#fff',
    crystalEffect: false,
    position: { x: 0, y: 0 },
    w: 200,
    h: 150,
    buttons: [],
    background: '',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    componentData: {},
    index: 1,
    label: 'Card 1',
    onSelect: () => console.log('Card 1 selected')
  };

  const cardProps2 = {
    id: '2',
    content: 'Settings Content',
    opacity: 0.5,
    imageOpacity: 0.5,
    blur: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderOpacity: 0.8,
    borderColor: '#000',
    glowEffect: false,
    glowColor: '#fff',
    crystalEffect: false,
    position: { x: 0, y: 0 },
    w: 200,
    h: 150,
    buttons: [],
    background: '',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    componentData: {},
    index: 2,
    label: 'Card 2',
    onSelect: () => console.log('Card 2 selected')
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <GlassCard 
        card={cardProps1}
        onSelect={() => console.log('Card 1 selected')}
      >
        <h3 className="text-lg font-bold mb-2">Create New Card</h3>
        <MagickButton variant="primary" size="large" onClick={handleAction}>
          Add Card
        </MagickButton>
      </GlassCard>

      <GlassCard 
        card={cardProps2}
        onSelect={() => console.log('Card 2 selected')}
      >
        <h3 className="text-lg font-bold mb-2">Settings</h3>
        <MagickButton variant="secondary" size="medium" onClick={handleAction}>
          Open Settings
        </MagickButton>
      </GlassCard>

      {/* Add more GlassCards with MagickButtons as needed */}
    </div>
  );
};

export default Dashboard;
