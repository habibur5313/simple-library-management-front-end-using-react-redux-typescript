import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://simplelibrarymanagement.vercel.app/api
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
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {useGetBooksQuery,useCreateBookMutation} = baseApi;
