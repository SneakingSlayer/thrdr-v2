import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/constants';
import { type ThreadUserProps } from '@/types';

interface ReplyParams {
  id: string;
  query?: string;
}

interface CreateReplyProps {
  query?: string;
  payload: {
    threadId: string;
    createdBy: string | null | ThreadUserProps;
    createdFor: string | null | ThreadUserProps;
    message: string;
    isAnonymous: boolean;
    isLocked: boolean;
  };
}

export const replyApi = createApi({
  reducerPath: 'replyApi',
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
  tagTypes: ['GET_REPLIES', 'GET_THREAD'],
  endpoints: (builder) => ({
    getReplies: builder.query({
      query: ({ id, query }: ReplyParams) => ({
        url: `/api/v2/replies/${id}?${query ?? ''}`,
        method: 'GET',
      }),
      providesTags: ['GET_REPLIES'],
    }),
    createReply: builder.mutation({
      query: ({ payload }: CreateReplyProps) => ({
        url: `/api/v2/reply/${payload.threadId}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['GET_REPLIES'],
    }),
  }),
});

export const { useLazyGetRepliesQuery, useCreateReplyMutation } = replyApi;
