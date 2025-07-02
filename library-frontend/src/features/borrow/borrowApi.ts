import { api } from '../../redux/api/apiSlice';

// Define a type for the API response
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Define the type for a single summary item
interface ISummaryItem {
  bookId: string;
  title: string;
  isbn: string;
  totalBorrowed: number;
}

const borrowApi = api.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation({
      query: (data) => ({
        url: '/borrow',
        method: 'POST',
        body: data,
      }),
      // This invalidates both tags to refetch data on related pages
      invalidatesTags: ['Book', 'BorrowSummary'],
    }),
    
    getBorrowSummary: builder.query<ISummaryItem[], void>({
      query: () => '/borrow-summary',
      providesTags: ['BorrowSummary'],
      // Add this transform to extract the array from the response
      transformResponse: (response: ApiResponse<ISummaryItem[]>) => response.data,
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;