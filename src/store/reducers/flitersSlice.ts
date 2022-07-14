import { createSlice } from '@reduxjs/toolkit'
import { Filters } from '../../types/flightsTypes'

interface typeInitialState {
  filters: Filters
}

const initialState: typeInitialState = {
  filters: {
    airline: [],
    price: [],
    stops: [],
    sortPrice: '',
    sortTime: '',
  },
}
export const filtersSlice = createSlice({
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
      state.filters.airline?.push(action.payload)
    },
    deleteAirline: (state, action) => {
      state.filters.airline?.splice(state.filters.airline.indexOf(action.payload), 1)
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

export const { setPrice, setStops, setAirline, setSortPrice, deleteAirline } = filtersSlice.actions
export default filtersSlice.reducer
