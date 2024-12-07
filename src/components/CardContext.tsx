// src/context/CardContext.tsx

import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Card {
  id: string;
  backgroundColor: string;
  opacity: number;
  blur: number;
  borderRadius: number;
  // Add other card properties as needed
}

type State = {
  cards: Card[];
};

type Action =
  | { type: 'UPDATE_CARD'; payload: { id: string; updates: Partial<Card> } }
  | { type: 'ADD_CARD'; payload: Card }
  | { type: 'REMOVE_CARD'; payload: { id: string } };

const initialState: State = {
  cards: [],
};

const CardContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const cardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_CARD':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, ...action.payload.updates }
            : card
        ),
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case 'REMOVE_CARD':
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
