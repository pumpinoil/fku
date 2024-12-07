// src/store/reducer.ts

import { MagickActionTypes } from './actions';
import { ADD_CARD, REMOVE_CARD, UPDATE_CARD, SELECT_CARD, DESELECT_CARD, TOGGLE_THEME, UPDATE_PAGE } from './actionTypes';
import { MagickCardProps, PageSettings } from '../types/magickCard';

interface MagickState {
  cards: MagickCardProps[];
  selectedCardId: string | null;
  theme: 'light' | 'dark';
  pageSettings: PageSettings;
}

const initialState: MagickState = {
  cards: [],
  selectedCardId: null,
  theme: 'light',
  pageSettings: {
    backgroundImage: '/stylecard.jpg',
    backgroundColor: '#000000',
    backgroundBlur: 0,
    backgroundOpacity: 1,
  },
};

export const magickReducer = (state = initialState, action: MagickActionTypes): MagickState => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
        selectedCardId: state.selectedCardId === action.payload ? null : state.selectedCardId,
      };
    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.cardId ? { ...card, ...action.payload.updates } : card
        ),
      };
    case SELECT_CARD:
      return {
        ...state,
        selectedCardId: action.payload,
      };
    case DESELECT_CARD:
      return {
        ...state,
        selectedCardId: null,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case UPDATE_PAGE:
      return {
        ...state,
        pageSettings: { ...state.pageSettings, ...action.payload },
      };
    default:
      return state;
  }
};
