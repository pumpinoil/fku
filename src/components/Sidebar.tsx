import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DraggableItem from './GlassCard'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledSidebar = styled(motion.div)`
  &.glass-bg {
    color: white;
    display: flex;
    flex-direction: column;
    z-index: 50;
    padding: 1rem;
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
`;

const Sidebar: React.FC<SidebarProps> = () => {
  // We'll have a static list of components
  const items = [
    { id: 'page_settings', label: 'Page Settings', nonDraggable: true },
    { id: 'magick_card', label: 'Basic Card' },
    { id: 'article_comp', label: 'Article' },
    { id: 'animated_card_comp', label: 'Animated Card' },
    { id: 'card_list_comp', label: 'Card List' },
    { id: 'dashboard_comp', label: 'Dashboard' },
    { id: 'form_comp', label: 'Form' },
    { id: 'fancy_button_comp', label: 'Fancy Button' },
    { id: 'fractal_canvas_comp', label: 'Fractal Canvas' },
    { id: 'grid_layout_comp', label: 'Grid Layout' },
    { id: 'icon_with_tooltip_comp', label: 'Icon With Tooltip' },
    { id: 'interactive_image_comp', label: 'Interactive Image' },
    { id: 'layout_comp', label: 'Layout Container' },
    { id: 'magick_card_3d_comp', label: '3D MagickCard' },
      { id: 'video_player_comp', label: 'Video Player' }
    ];

  return (
    <StyledSidebar
      initial={{ x: -300 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      {...{ className: "glass-bg text-white flex flex-col z-50 p-4" }}       
    >
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Components</h1>
      </header>
      
      <div className="mb-4">
        <button
          className="w-full flex items-center space-x-2 p-2 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30 cursor-pointer"
          onClick={() => {
            // Trigger page customization
            const event = new CustomEvent('openPageCustomization');
            window.dispatchEvent(event);
          }}
        >
          <span className="text-white">Page Settings</span>
        </button>
      </div>

      <Droppable droppableId="sidebar" type="CARD">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4 overflow-auto pb-4">
            {items.filter(i => i.id !== 'page_settings').map((item, index) => (
              <DraggableItem key={item.id} id={item.id} index={index} label={item.label} card={{ /* provide valid MagickCardProps here */ }} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <footer className="mt-auto pt-4 border-t border-white border-opacity-20">
        <p className="text-sm text-gray-300">Footer Info</p>
      </footer>
    </StyledSidebar>
  );
};

export default Sidebar;