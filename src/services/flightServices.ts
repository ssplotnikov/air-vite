import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FlightElement } from '../types/flightsTypes'

export const flightApi = createApi({
  reducerPath: 'flightApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/flights' }),
  endpoints: (build) => ({
    getFlightByCaption: build.query<FlightElement, string | string[]>({
      query: (caption) => `?page=1&limit=10&flight.carrier.caption=${caption}`,
    }),
  }),
})

export const { useGetFlightByCaptionQuery } = flightApi

export const { getFlightByCaption } = flightApi.endpoints
