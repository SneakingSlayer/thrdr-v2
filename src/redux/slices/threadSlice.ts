/* eslint-disable @typescript-eslint/space-before-function-paren */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type ThreadProps } from '@/types';

const initialState = {
  threads: [] as ThreadProps[],
};

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    loadThreads(state, action) {
      state.threads.push(...action.payload);
    },
    addThread(state, action) {
      state.threads.unshift(action.payload);
    },
  },
});

export const { loadThreads, addThread } = threadsSlice.actions;

export default threadsSlice.reducer;
