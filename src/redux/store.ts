import { configureStore } from '@reduxjs/toolkit';
import { threadsApi } from './services/threadServices';

export const store = configureStore({
   reducer: {
      [threadsApi.reducerPath]: threadsApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(threadsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
