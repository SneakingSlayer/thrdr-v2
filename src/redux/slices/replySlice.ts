/* eslint-disable @typescript-eslint/space-before-function-paren */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type ThreadProps } from '@/types';

const initialState = {
  replies: [] as any[],
};

const replySlice = createSlice({
  name: 'replies',
  initialState,
  reducers: {
    loadReplies(state, action) {
      if (!action?.payload?.length) {
        state.replies = [];
      } else {
        state.replies.push(...action.payload);
      }
    },
  },
});

export const { loadReplies } = replySlice.actions;

export default replySlice.reducer;
