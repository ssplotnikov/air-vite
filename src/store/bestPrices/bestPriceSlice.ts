import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BestPrices } from '../../data/flightsTypes';
import { fetchBestPrices } from '../flight/actionsFlight';

interface typeBestPrices {
  data: BestPrices[];
  loading: boolean;
  error: string | undefined | null | unknown;
}

const initialState: typeBestPrices = {
  data: [],
  loading: false,
  error: null,
};

export const bestPriceSlice = createSlice({
  name: 'bestPrices',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBestPrices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchBestPrices.fulfilled,
      (state, action: PayloadAction<BestPrices[]>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchBestPrices.rejected, (state, action) => {
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

const { reducer } = bestPriceSlice;

export default reducer;
