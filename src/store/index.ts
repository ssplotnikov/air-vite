import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { flightApi } from '../services/flightServices'
import filtersSlice from './reducers/flitersSlice'

export const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
    [flightApi.reducerPath]: flightApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(flightApi.middleware),
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
