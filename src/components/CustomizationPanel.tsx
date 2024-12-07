// src/components/CustomizationPanel.tsx

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateCard } from '../store/actions';
import { SketchPicker } from 'react-color';
import TiptapEditor from './TipTapEditor';

interface CustomizationPanelProps {
  cardId: string;
  onClose: () => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ cardId, onClose }) => {
  const dispatch = useAppDispatch();
  const card = useAppSelector((state) => state.cards.find((c) => c.id === cardId));

  const [content, setContent] = useState('');
  const [opacity, setOpacity] = useState(1);
  const [blur, setBlur] = useState(0);
  const [borderColor, setBorderColor] = useState<string>('');
  const [borderOpacity, setBorderOpacity] = useState<number>(1);
  const [borderRadius, setBorderRadius] = useState<number>(0);
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [background, setBackground] = useState<string>('');
  const [componentData, setComponentData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (card) {
      setContent(card.content);
      setOpacity(card.opacity);
      setBlur(card.blur);
      setBorderColor(card.borderColor);
      setBorderOpacity(card.borderOpacity);
      setBorderRadius(card.borderRadius);
      setWidth(card.w);
      setHeight(card.h);
      setBackgroundColor(card.backgroundColor);
      setTextColor(card.textColor);
      setBackground(card.background);
      setComponentData({ ...card.componentData });
    }
  }, [card]);

  const handleSave = () => {
    if (card) {
      dispatch(
        updateCard(card.id, {
          content,
          opacity,
          blur,
          borderColor,
          borderOpacity,
          borderRadius,
          w: width,
          h: height,
          backgroundColor,
          textColor,
          background,
          componentData,
        })
      );
    }
    onClose();
  };

  // Component-specific fields
  let componentSpecificFields: React.ReactNode = null;
  if (card?.componentType === 'video_player_comp') {
    componentSpecificFields = (
      <div>
        <label className="block text-white">Video URL:</label>
        <input
          type="text"
          value={(componentData.videoURL as string) || ''}
          onChange={(e) => setComponentData({ ...componentData, videoURL: e.target.value })}
          className="input mt-1"
        />
      </div>
    );
  } else if (card?.componentType === 'fractal_canvas_comp') {
    componentSpecificFields = (
      <div>
        <label className="block text-white">Fractal Param:</label>
        <input
          type="number"
          value={(componentData.fractalParam as number) || 1}
          onChange={(e) => setComponentData({ ...componentData, fractalParam: parseInt(e.target.value, 10) })}
          className="input mt-1"
        />
      </div>
    );
  }

  return (
    <div className="customization-panel">
      <h2 className="text-2xl mb-4">Customize {card?.label || 'Card'}</h2>

      {/* Content Editor */}
      <div>
        <label className="block text-white">Content (HTML/Text):</label>
        <TiptapEditor value={content} onChange={setContent} />
      </div>

      {componentSpecificFields}

      <div>
        <label className="block text-white">Background Image URL:</label>
        <input
          type="text"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          className="input mt-1"
        />
      </div>

      <div>
        <label className="block text-white">Opacity:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-white">Blur (px):</label>
        <input
          type="range"
          min="0"
          max="20"
          step="1"
          value={blur}
          onChange={(e) => setBlur(parseInt(e.target.value, 10))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-white mb-1">Border Color:</label>
        <SketchPicker
          color={borderColor}
          onChange={(color) => setBorderColor(color.hex)}
          disableAlpha
        />
      </div>

      <div>
        <label className="block text-white">Border Opacity:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={borderOpacity}
          onChange={(e) => setBorderOpacity(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-white">Border Radius (px):</label>
        <input
          type="number"
          value={borderRadius}
          onChange={(e) => setBorderRadius(parseInt(e.target.value, 10))}
          className="input mt-1"
        />
      </div>

      <div>
        <label className="block text-white">Width (px):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value, 10))}
          className="input mt-1"
        />
      </div>

      <div>
        <label className="block text-white">Height (px):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value, 10))}
          className="input mt-1"
        />
      </div>

      <div>
        <label className="block text-white mb-1">Background Color:</label>
        <SketchPicker
          color={backgroundColor}
          onChange={(color) => setBackgroundColor(color.hex)}
          disableAlpha
        />
      </div>

      <div>
        <label className="block text-white mb-1">Text Color:</label>
        <SketchPicker
          color={textColor}
          onChange={(color) => setTextColor(color.hex)}
          disableAlpha
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button
          onClick={handleSave}
          className="btn btn-primary"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="btn btn-danger"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CustomizationPanel;
