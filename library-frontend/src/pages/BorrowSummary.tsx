import { useGetBorrowSummaryQuery } from '@/features/borrow/borrowApi';

export default function BorrowSummary() {
  const { data: summary, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <div>Loading summary...</div>;
  if (isError) return <div>Error fetching summary.</div>;

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold mb-6">Borrow Summary</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Book Title</th>
            <th className="py-2 px-4">ISBN</th>
            <th className="py-2 px-4">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {summary?.map((item: any) => (
            <tr key={item.bookId} className="border-b text-center">
              <td className="py-2 px-4">{item.title}</td>
              <td className="py-2 px-4">{item.isbn}</td>
              <td className="py-2 px-4">{item.totalBorrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}