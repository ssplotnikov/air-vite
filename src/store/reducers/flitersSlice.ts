import { createSlice } from '@reduxjs/toolkit'
import { Filters } from '../../types/flightsTypes'

interface typeInitialState {
  filters: Filters
  sort: {
    sortPrice?: string
    sortTime?: string
  }
}

const initialState: typeInitialState = {
  filters: {
    airline: {},
    minPrice: '',
    maxPrice: '',
    stops: [],
  },
  sort: {
    sortPrice: '',
    sortTime: '',
  },
}
export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    setPrice: (state, action) => {
      // state.filters.price?.push(action.payload)
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
      state.sort.sortPrice = action.payload
    },
    setSortTime: (state, action) => {
      state.sort.sortTime = action.payload
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    },
  },
})

export const {
  setFilters,
  setPrice,
  setStops,
  setAirline,
  setSortPrice,
  deleteAirline,
  resetFilters,
} = filtersSlice.actions
export default filtersSlice
