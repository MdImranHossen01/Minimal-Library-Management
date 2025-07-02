import { useGetSingleBookQuery } from '@/features/book/bookApi';
import { useBorrowBookMutation } from '@/features/borrow/borrowApi';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function BorrowBook() {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading: isFetching } = useGetSingleBookQuery(id!);
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!book) return;

    if (quantity > book.copies) {
        toast.error('Cannot borrow more than available copies.');
        return;
    }
    
    try {
        await borrowBook({ bookId: id, quantity, dueDate }).unwrap();
        toast.success('Book borrowed successfully!');
        navigate('/borrow-summary');
    } catch (error) {
        toast.error('Failed to borrow book.');
    }
  };

  if(isFetching) return <div>Loading...</div>

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Borrow: {book?.title}</h1>
      <p className="mb-4">Available Copies: {book?.copies}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max={book?.copies} required className="w-full p-2 border"/>
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required className="w-full p-2 border"/>
        </div>
        <button type="submit" disabled={isLoading || !book?.available} className="w-full bg-green-500 text-white p-2 rounded disabled:bg-gray-400">
            {isLoading ? 'Processing...' : 'Borrow'}
        </button>
      </form>
    </div>
  );
}