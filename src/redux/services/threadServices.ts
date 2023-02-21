import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const threadsApi = createApi({
   reducerPath: 'threadsApi',
   baseQuery: fetchBaseQuery({
      baseUrl: '',
      prepareHeaders: (headers, { getState }) => {
         /*const token = (getState() as RootState).auth.token;
         if (token) {
            headers.set('Authorization', `Bearer ${token}`);
         }
         return headers;*/
      },
   }),
   tagTypes: ['GET_THREADS', 'GET_THREAD'],
   endpoints: (builder) => ({
      getThreads: builder.query({
         query: ({ id }) => ({
            url: `/api/v2/threads/${id}`,
            method: 'GET',
         }),
         providesTags: ['GET_THREADS'],
      }),
      getThread: builder.query({
         query: ({ id }) => ({
            url: `/api/v2/thread/${id}`,
            method: 'GET',
         }),
         providesTags: ['GET_THREAD'],
      }),
      createThread: builder.mutation({
         query: ({ id }) => ({
            url: `/api/v2/threads/${id}`,
            method: 'POST',
         }),
         invalidatesTags: ['GET_THREADS'],
      }),
   }),
});

export const {
   useLazyGetThreadsQuery,
   useLazyGetThreadQuery,
   useCreateThreadMutation,
} = threadsApi;
