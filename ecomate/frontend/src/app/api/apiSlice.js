import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api', // Optional: helps separate state slices if needed
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }), // adjust port if your backend uses a different one
  tagTypes: ['Activity', 'User', 'Community', 'Challenge', 'Post'],
  endpoints: builder => ({})
})
