// src/store/store.ts

import { createStore } from 'redux';
import { magickReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(magickReducer, composeWithDevTools());

export type RootState = ReturnType<typeof magickReducer>;
export type AppDispatch = typeof store.dispatch;
