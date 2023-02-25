import { configureStore } from '@reduxjs/toolkit';

// Services
import { threadsApi } from './services/threadServices';

// Slices
import threadSlice from './slices/threadSlice';

export const store = configureStore({
  reducer: {
    [threadsApi.reducerPath]: threadsApi.reducer,
    threads: threadSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(threadsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
