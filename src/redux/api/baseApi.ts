import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    // all books get query
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    // limited book get query
    getBooksLimit: builder.query({
      query: () => `/books?limit=9`,
      providesTags: ["book"],
    }),
    // single book get query
     getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["book"],
    }),
    // create book query
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    // delete book query
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,  
        method: "DELETE",
      }),
      invalidatesTags: ["book"],  
    }),
    // update book query
     putBook: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["book"],
    }),
    // Get Borrow Book
    getBorrowBook: builder.query({
      query: () => "/borrow",
      providesTags: ["book"],
    }),
     // Borrow book mutation
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: `/borrow`,
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBooksLimitQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  usePutBookMutation,
  useBorrowBookMutation,
  useGetBorrowBookQuery,
} = baseApi;
