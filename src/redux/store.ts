import { configureStore } from '@reduxjs/toolkit';

// Services
import { threadsApi } from './services/threadServices';
import { replyApi } from './services/replyServices';

// Slices
import threadSlice from './slices/threadSlice';
import replySlice from './slices/replySlice';

export const store = configureStore({
  reducer: {
    [threadsApi.reducerPath]: threadsApi.reducer,
    [replyApi.reducerPath]: replyApi.reducer,
    threads: threadSlice,
    replies: replySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(threadsApi.middleware, replyApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
