import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const replyApi = createApi({
  reducerPath: 'replyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      /* const token = (getState() as RootState).auth.token;
         if (token) {
            headers.set('Authorization', `Bearer ${token}`);
         }
         return headers; */
    },
  }),
  tagTypes: ['GET_REPLIES', 'GET_THREAD'],
  endpoints: (builder) => ({
    getReplies: builder.query({
      query: ({ id }) => ({
        url: `/api/v2/replies/${id}`,
        method: 'GET',
      }),
      providesTags: ['GET_REPLIES'],
    }),
    createReply: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v2/replies/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['GET_REPLIES'],
    }),
  }),
});

export const { useLazyGetRepliesQuery } = replyApi;
