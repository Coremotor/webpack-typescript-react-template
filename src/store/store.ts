import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/rootReduser';

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type TState = ReturnType<typeof rootReducer>;
