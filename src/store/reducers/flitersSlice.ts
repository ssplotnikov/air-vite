import { createSlice } from '@reduxjs/toolkit'
import { Filters } from '../../types/flightsTypes'

interface typeInitialState {
  filters: Filters
}

const initialState: typeInitialState = {
  filters: {
    airline: '',
    price: [],
    stops: [],
    sortPrice: '',
    sortTime: '',
  },
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.filters.price = action.payload
    },
    setStops: (state, action) => {
      state.filters.stops = action.payload
    },
    setAirline: (state, action) => {
      state.filters.airline = action.payload
    },
    setSortPrice: (state, action) => {
      state.filters.sortPrice = action.payload
    },
    setSortTime: (state, action) => {
      state.filters.sortTime = action.payload
    },
    resetFilters: (state, action) => {
      state.filters = initialState.filters
    },
  },
})

const { reducer } = filterSlice

export default reducer
