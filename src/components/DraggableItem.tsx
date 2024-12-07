import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { FiBox } from 'react-icons/fi';

interface DraggableItemProps {
  id: string;
  index: number;
  label: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, index, label }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="flex items-center space-x-2 p-2 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30 cursor-grab"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <FiBox size={20} color="#fff" />
          <span className="text-white">{label}</span>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
