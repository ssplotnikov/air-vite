import { createAsyncThunk } from '@reduxjs/toolkit';
import { FlightsAPI } from '../../api/flightAPI';

export const fetchAllFlights = createAsyncThunk(
  'flights/fetchAllFlights',
  async (_, { rejectWithValue }) => {
    try {
      const response = await FlightsAPI.fetchAll();
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchBestPrices = createAsyncThunk(
  'flights/fetchBestPrices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await FlightsAPI.fetchBestPrices();
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)
