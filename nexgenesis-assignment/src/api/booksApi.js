import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-server-deployment-3wy6.onrender.com/",
  }),
  fetchFn: (input, init) => {
    return fetch(input, {
      ...init,
      targetAddressSpace: "private", // 👈 This triggers the permission popup
    });
  },
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    //Get all books
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["Books"],
    }),

    //Get book by id
    getBook: builder.query({
      query: (bookId) => `books/${bookId}`,
      providesTags: ["Books"],
    }),

    //Remove Book mutation
    removeBook: builder.mutation({
      query: (bookId) => ({
        url: `books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    //Update book mutation
    updateBook: builder.mutation({
      query: (book) => ({
        url: `books/${book.id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),

    // Add book mutation
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
