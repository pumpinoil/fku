// src/components/CanvasArea.tsx

import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { MagickCardProps } from '../types/magickCard';
import { renderCardContent } from './renderCardContent';
import classNames from 'classnames';
import { useAppDispatch } from '../store/hooks';
import { updateCard } from '../store/actions';
import { ResizableBox } from 'react-resizable';
import GlassCard from './GlassCard';
import { Droppable } from '@hello-pangea/dnd';

interface CanvasAreaProps {
  cards: MagickCardProps[];
  onCardSelect: (id: string) => void;
}

const CanvasArea: React.FC<CanvasAreaProps> = ({ cards, onCardSelect }) => {
  const dispatch = useAppDispatch();

  const handleResizeStop = (cardId: string, data: { size: { width: number; height: number } }) => {
    dispatch(updateCard(cardId, { w: data.size.width, h: data.size.height }));
  };

  return (
    <Droppable droppableId="canvas">
      {(provided, snapshot) => (
        <div
          className={classNames(
            "absolute left-72 top-0 right-0 bottom-0 p-4 overflow-auto",
            { "opacity-90": snapshot.isDraggingOver }
          )}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {cards.map((card, index) => (
            <Draggable key={card.id} draggableId={card.id} index={index}>
              {(provided, snapshot) => (
                <React.Fragment>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      position: 'absolute',
                      left: card.position.x,
                      top: card.position.y,
                      zIndex: snapshot.isDragging ? 1000 : 1,
                      ...provided.draggableProps.style,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onCardSelect(card.id);
                    }}
                  >
                    <ResizableBox
                      width={card.w}
                      height={card.h}
                      minConstraints={[100, 100]}
                      maxConstraints={[800, 800]}
                      onResizeStop={(_, data) => handleResizeStop(card.id, data)}
                      handle={<span className="react-resizable-handle react-resizable-handle-se" />}
                      className="relative"
                    >
                      <GlassCard
                        card={card}
                        onSelect={() => onCardSelect(card.id)} id={''} label={''} index={0}                      >
                        {renderCardContent(card)}
                      </GlassCard>
                    </ResizableBox>
                  </div>
                </React.Fragment>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CanvasArea;



