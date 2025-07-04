import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://simplelibrarymanagement.vercel.app/api/',
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    getBooksLimit: builder.query({
      query: () => `/books?limit=9`,
      providesTags: ["book"],
    }),
     getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["book"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,  
        method: "DELETE",
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
  useBorrowBookMutation,
  useGetBorrowBookQuery,
} = baseApi;
