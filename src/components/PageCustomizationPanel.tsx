// src/components/PageCustomizationPanel.tsx

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updatePage } from '../store/actions';
import { SketchPicker } from 'react-color';

interface PageCustomizationPanelProps {
  onClose: () => void;
}

const PageCustomizationPanel: React.FC<PageCustomizationPanelProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const pageSettings = useAppSelector((state) => state.pageSettings);

  const [backgroundImage, setBackgroundImage] = useState(pageSettings.backgroundImage);
  const [backgroundColor, setBackgroundColor] = useState(pageSettings.backgroundColor);
  const [backgroundBlur, setBackgroundBlur] = useState(pageSettings.backgroundBlur);
  const [backgroundOpacity, setBackgroundOpacity] = useState(pageSettings.backgroundOpacity);

  const handleSave = () => {
    dispatch(updatePage({ backgroundImage, backgroundColor, backgroundBlur, backgroundOpacity }));
    onClose();
  };

  return (
    <div className="flex flex-col space-y-4 text-white">
      <h2 className="text-2xl mb-4">Customize Page</h2>
      
      <div>
        <label className="block text-white">Background Image URL:</label>
        <input
          type="text"
          value={backgroundImage}
          onChange={(e) => setBackgroundImage(e.target.value)}
          className="w-full p-2 mt-1 rounded bg-white text-black"
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
        <label className="block text-white">Background Blur (px):</label>
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          value={backgroundBlur}
          onChange={(e) => setBackgroundBlur(parseInt(e.target.value, 10))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-white">Background Opacity:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={backgroundOpacity}
          onChange={(e) => setBackgroundOpacity(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PageCustomizationPanel;
