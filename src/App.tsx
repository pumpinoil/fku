// src/components/App.tsx

import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { addCard, selectCard, deselectCard } from './store/actions';
import { getDefaultCardProps } from './components/cardFactory';
import Sidebar from './components//Sidebar';
import CanvasArea from './components/CanvasArea';
import CustomizationPanel from './components//CustomizationPanel';
import PageCustomizationPanel from './components/PageCustomizationPanel';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemToggle';
import LayoutHeaderFooter from './components/LayoutHeaderFooter';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCardId = useAppSelector((state) => state.selectedCardId);
  const cards = useAppSelector((state) => state.cards);
  const theme = useAppSelector((state) => state.theme);
  const pageSettings = useAppSelector((state) => state.pageSettings);

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isCustomizationOpen, setCustomizationOpen] = useState(false);
  const [pageEditing, setPageEditing] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handler = () => {
      dispatch(deselectCard());
      setCustomizationOpen(true);
      setPageEditing(true);
    };
    window.addEventListener('openPageCustomization', handler);
    return () => window.removeEventListener('openPageCustomization', handler);
  }, [dispatch]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (source.droppableId === 'sidebar' && destination.droppableId === 'canvas') {
      const cardProps = getDefaultCardProps(draggableId);
      cardProps.position = { x: destination.index * 50, y: destination.index * 50 };
      dispatch(addCard(cardProps));
    }
  };

  const handleCardSelect = (id: string) => {
    dispatch(selectCard(id));
    setCustomizationOpen(true);
    setPageEditing(false);
  };

  const handleDeselectCard = () => {
    dispatch(deselectCard());
    setCustomizationOpen(false);
    setPageEditing(false);
  };

  return (
    <LayoutHeaderFooter>
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: `url(${pageSettings.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: `blur(${pageSettings.backgroundBlur}px)`,
          opacity: pageSettings.backgroundOpacity,
          backgroundColor: pageSettings.backgroundColor,
        }}
      >
        <ThemeToggle />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          <CanvasArea cards={cards} onCardSelect={handleCardSelect} />
            {(isCustomizationOpen && (pageEditing || selectedCardId)) && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                {...{className: "fixed top-0 right-0 w-96 h-full glass-bg bg-opacity-90 p-4 z-50 overflow-y-auto" }}
              >
                {pageEditing ? (
                  <PageCustomizationPanel onClose={handleDeselectCard} />
                ) : (
                  selectedCardId && <CustomizationPanel cardId={selectedCardId} onClose={handleDeselectCard} />
                )}
              </motion.div>
            )}
        </DragDropContext>
      </div>
    </LayoutHeaderFooter>
  );
};

export default App;
