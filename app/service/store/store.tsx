import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Blogs } from "../getBlogs";
export const store = configureStore({
  reducer: {
    [Blogs.reducerPath]: Blogs.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(Blogs.middleware);
  },
});

setupListeners(store.dispatch);
