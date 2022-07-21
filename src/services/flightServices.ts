import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FlightElement } from '../types/flightsTypes'

export const flightApi = createApi({
  reducerPath: 'flightApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
    // надо типизировать!
    getFlightByCaption: build.query<any, any>({
      query: (filters = '') =>
        `flights?_page=1&_limit=10
        ${
          filters.airline.length &&
          filters.airline.map((item: string) => `&flight.carrier.caption=${item}&`)
        }
        ${filters.minPrice && `&flight.price.total.amount_gte=${filters.minPrice}`}
        ${filters.maxPrice && `&flight.price.total.amount_lte=${filters.maxPrice}`}`,
    }),
  }),
})

export const { useGetFlightByCaptionQuery } = flightApi

export const { getFlightByCaption } = flightApi.endpoints

// http://localhost:3000/flights?page=1&limit=10&flight.carrier.caption=KLM&flight.price.total.amount_gte=36491&flight.price.total.amount_lte=71548
// http://localhost:3000/flights?page=1&limit=10&flight.carrier.caption=KLM&flight.price.total.amount_gte=36491&flight.price.total.amount_lte=71548
