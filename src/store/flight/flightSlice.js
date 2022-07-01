import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { FlightsAPI } from './../../api/flightAPI';

export const fetchAllFlights = createAsyncThunk(
  'flights/fetchAllFlights',
  async () => {
    const response = await FlightsAPI.fetchAll();
    return response;
  },
);
export const flightsAdapter = createEntityAdapter();

const initialState = flightsAdapter.getInitialState({
  loading: true,
  error: null,
});

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFlights.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllFlights.fulfilled, (state, action) => {
      flightsAdapter.addOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchAllFlights.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const reducer = flightSlice.reducer;
export default reducer;

export const {
  selectById: selectFlightById,
  selectIds: selectFlightIds,
  selectEntities: selectFlightEntities,
  selectAll: selectAllFlights,
  selectTotal: selectTotalFlights,
} = flightsAdapter.getSelectors((state) => state.flight);
