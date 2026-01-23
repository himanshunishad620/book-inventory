import { configureStore } from "@reduxjs/toolkit";
import booksApi from "../api/booksApi";
const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
export default store;
