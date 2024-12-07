// src/components/GlassCard.tsx

import React from 'react';
import { MagickCardProps } from '../types/magickCard';

interface GlassCardProps {
  id: string;
  label: string;
  index: number;
  card: MagickCardProps;
  onSelect?: () => void;
  children?: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ card, onSelect, children }) => {
  console.log('GlassCard received card:', card);

  if (!card) {
    console.error("GlassCard was rendered without a 'card' prop.");
    return null;
  }

  // Defensive check: Ensure all required fields are present
  const requiredFields: (keyof MagickCardProps)[] = [
    'id',
    'content',
    'opacity',
    'imageOpacity',
    'blur',
    'borderRadius',
    'borderWidth',
    'borderOpacity',
    'borderColor',
    'glowEffect',
    'glowColor',
    'crystalEffect',
    'position',
    'w',
    'h',
    'buttons',
    'background',
    'backgroundColor',
    'textColor',
    'componentData'
  ];

  for (const field of requiredFields) {
    if (card[field] === undefined || card[field] === null) {
      console.error(`GlassCard: 'card.${field}' is missing or undefined. Please provide all required fields.`);
      return null;
    }
  }

  const style: React.CSSProperties = {
    backdropFilter: `blur(${card.blur}px)`,
    backgroundColor: card.backgroundColor + (card.backgroundColor.length === 7 ? 'FF' : ''),
    border: `${card.borderWidth}px solid ${card.borderColor}`,
    borderRadius: `${card.borderRadius}px`,
    opacity: card.opacity,
    color: card.textColor,
    position: 'relative',
    overflow: 'hidden',
    width: card.w,
    height: card.h
  };

  return (
    <div
      className="glass-bg p-4 shadow-lg flex flex-col cursor-pointer"
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        if (onSelect) {
          onSelect();
        }
      }}
    >
      <div className="card-content">
        {card.content}
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
