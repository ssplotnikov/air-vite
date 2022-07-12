import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FlightElement } from '../../types/flightsTypes'
import { fetchAllFlights } from './actionsFlight'

interface typeInitialState {
  data: FlightElement[] | []
  loading: boolean
  error: null | string | undefined | unknown
}

const initialState: typeInitialState = {
  data: [],
  loading: true,
  error: null,
}

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFlights.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllFlights.fulfilled, (state, action: PayloadAction<FlightElement[]>) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(fetchAllFlights.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
        state.loading = false
      } else {
        state.error = action.error.message
        state.loading = false
      }
    })
  },
})

const { reducer } = flightSlice
export default reducer
