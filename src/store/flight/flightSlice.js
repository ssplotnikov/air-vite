import { createSlice } from '@reduxjs/toolkit';
import { fetchAllFlights } from './actionsFlight';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFlights.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllFlights.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllFlights.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
        state.loading = false;
      } else {
        state.error = action.error.message;
        state.loading = false;
      }
    });
  },
});

const reducer = flightSlice.reducer;
export default reducer;
