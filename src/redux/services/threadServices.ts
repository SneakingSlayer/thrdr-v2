import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/constants';

interface ThreadParams {
  query?: string;
  id: string;
}

export const threadsApi = createApi({
  reducerPath: 'threadsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      /* const token = (getState() as RootState).auth.token;
         if (token) {
            headers.set('Authorization', `Bearer ${token}`);
         }
         return headers; */
    },
  }),
  tagTypes: ['GET_THREADS', 'GET_THREAD'],
  endpoints: (builder) => ({
    getThreads: builder.query({
      query: ({ id, query }: ThreadParams) => ({
        url: `/api/v2/threads/${id}?${query ?? ''}`,
        method: 'GET',
      }),
      providesTags: ['GET_THREADS'],
    }),
    getThread: builder.query({
      query: ({ id }: ThreadParams) => ({
        url: `/api/v2/thread/${id}`,
        method: 'GET',
      }),
      providesTags: ['GET_THREAD'],
    }),
    createThread: builder.mutation({
      query: ({ id }: ThreadParams) => ({
        url: `/api/v2/threads/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['GET_THREADS'],
    }),
  }),
});

export const {
  useGetThreadQuery,
  useLazyGetThreadsQuery,
  useLazyGetThreadQuery,
  useCreateThreadMutation,
} = threadsApi;
