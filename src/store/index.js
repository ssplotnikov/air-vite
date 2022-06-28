import { configureStore } from '@reduxjs/toolkit';
import { flightSlice } from './flight/flightSlice';

export const store = configureStore({
  reducer: {
    flight: flightSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
