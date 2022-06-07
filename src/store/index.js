import { configureStore } from '@reduxjs/toolkit';
import { flightSlice } from './flight/flightSlice';

export const store = configureStore({
  reducer: {
    flight: flightSlice.reducer,
  },
});
