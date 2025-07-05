import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-api-theta.vercel.app/api" }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: { data: Book[] }) => response.data,
      providesTags: ["Book"],
    }),

    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "Book", id }],
    }),

    createBook: builder.mutation<Book, Partial<Book>>({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Book"],
    }),

    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Book",],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    // Bonus: Borrow Summary + Borrow
    getBorrowSummary: builder.query<any, void>({
      query: () => "/books/borrow-summary",
      transformResponse: (res: { data: any }) => res.data,
       providesTags: ["BorrowSummary"],
    }),

    borrowBook: builder.mutation<any, { book: string; quantity: number; dueDate: string }>({
      query: (data) => ({
        url: "/books/borrow-summary",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book", "BorrowSummary"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
} = bookApi;