import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { categoryApi } from "./services/categories";
import { subCategoryApi } from "./services/subCategories";

import { blogApi } from "./services/blogs";
// import categoryReducer from "./features/categories/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [subCategoryApi.reducerPath]: subCategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      // userApi.middleware,
      categoryApi.middleware,
      blogApi.middleware,
      subCategoryApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
