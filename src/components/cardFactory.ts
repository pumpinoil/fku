// src/components/cardFactory.ts

import { v4 as uuidv4 } from 'uuid';
import { MagickCardProps } from '../types/magickCard';

export function getDefaultCardProps(componentType: string): MagickCardProps {
  let defaultContent = "<p>Edit this text</p>";
  const defaultData: Record<string, string | number> = {};

  if (componentType === 'video_player_comp') {
    defaultData.videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  } else if (componentType === 'article_comp') {
    defaultContent = "<h1>Magickal Design Principles</h1><p>Explore foundational concepts...</p>";
  } else if (componentType === 'fractal_canvas_comp') {
    defaultData.fractalParam = 1;
  }

 return {
    id: uuidv4(),
    index: 0,
    label: 'Magick Card',
    componentType,
    content: defaultContent,
    opacity: 0.9,
    imageOpacity: 1,
    blur: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderOpacity: 0.5,
    borderColor: '#FFFFFF',
    glowEffect: false,
    glowColor: '#FFD700',
    crystalEffect: false,
    position: { x: 50, y: 50 },
    w: 300,
    h: 200,
    buttons: [],
    background: '/stylecard.jpg',
    backgroundColor: '#1F2937',
    textColor: '#FFFFFF',
    componentData: defaultData,
    onSelect: () => {},
    padding: '10px',
    margin: '10px',
    fontSize: '16px',
    boxShadow: 'none',
    zIndex: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    scaleX: 1,
    scaleY: 1,
    flipX: false,
    flipY: false,
    isVisible: true,
    isLocked: false
  };
}
 