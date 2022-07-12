// import { createSlice } from '@reduxjs/toolkit'
// import { fetchAllFilterFlights } from './actionFilter'

// interface typeInitialState {
//   data: undefined | Array<string>
//   loading: boolean
//   error: string | undefined | null | unknown
// }

// const initialState: typeInitialState = {
//   data: [],
//   loading: true,
//   error: null,
// }

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchAllFilterFlights.pending, (state) => {
//       state.loading = true
//     })
//     builder.addCase(fetchAllFilterFlights.fulfilled, (state, action) => {
//       state.data = action.payload
//       state.loading = false
//     })
//     builder.addCase(fetchAllFilterFlights.rejected, (state, action) => {
//       if (action.payload) {
//         state.error = action.payload
//         state.loading = false
//       } else {
//         state.error = action.error.message
//         state.loading = false
//       }
//     })
//   },
// })

// const { reducer } = filterSlice

// export default reducer
