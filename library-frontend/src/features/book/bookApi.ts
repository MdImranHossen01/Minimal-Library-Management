import { IBook } from '@/types';
import { api } from '../../redux/api/apiSlice';

// Define a type for the common API response structure
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Returns an array of books
    getBooks: builder.query<IBook[], void>({
      query: () => '/books',
      providesTags: ['Book'],
      transformResponse: (response: ApiResponse<IBook[]>) => response.data,
    }),

    // Returns a single book object
    getSingleBook: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: ['Book'],
      transformResponse: (response: ApiResponse<IBook>) => response.data,
    }),

    // Returns the newly created book object
    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: '/books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Book'],
      transformResponse: (response: ApiResponse<IBook>) => response.data,
    }),

    // Returns the updated book object
    updateBook: builder.mutation<IBook, { id: string; body: Partial<IBook> }>({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Book'],
      transformResponse: (response: ApiResponse<IBook>) => response.data,
    }),

    // Does not return data, so no transform is needed
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;