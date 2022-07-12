import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { flightApi } from '../services/flightServices'
import { bestPriceSlice } from './bestPrices/bestPriceSlice'
// import { filterSlice } from './filter/flitersSlice'
import { flightSlice } from './flight/flightSlice'

export const store = configureStore({
  reducer: {
    flight: flightSlice.reducer,
    bestPrices: bestPriceSlice.reducer,
    // filter: filterSlice.reducer,
    [flightApi.reducerPath]: flightApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flightApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
