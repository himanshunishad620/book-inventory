import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (bookId) => `books/${bookId}`,
      providesTags: ["Books"],
    }),
    removeBook: builder.mutation({
      query: (bookId) => ({
        url: `books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: (book) => ({
        url: `books/${book.id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: `books`,
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useUpdateBookMutation,
  useGetBookQuery,
  useRemoveBookMutation,
  useAddBookMutation,
} = booksApi;
export default booksApi;
