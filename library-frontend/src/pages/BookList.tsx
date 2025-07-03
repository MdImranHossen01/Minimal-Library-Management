import { useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import { useGetBooksQuery, useDeleteBookMutation } from '@/features/book/bookApi';
import { IBook } from '@/types';
import toast from 'react-hot-toast';
import Banner from '@/components/ui/Banner';
import BookCard from '@/components/ui/BookCard';
import FeaturedBooks from '@/components/ui/FeaturedBooks';
import HowItWorks from '@/components/ui/HowItWorks';
import Testimonials from '@/components/ui/Testimonials';
import Faq from '@/components/ui/Faq';

export default function BookList() {
  // Add 'error' to the hook to get the error details
  const { data: books, isLoading, isError, error } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  // This new part will log the specific error to your browser console
  useEffect(() => {
    if (error) {
      console.error('Detailed Fetch Error:', error);
    }
  }, [error]);


  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id).unwrap();
        toast.success('Book deleted successfully');
      } catch (err) {
        toast.error('Failed to delete book');
      }
    }
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  
  // We will now also display the error on the screen
  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        <h1>Error Fetching Data</h1>
        <pre className="mt-4 text-left bg-gray-100 p-4 rounded">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <>
      <Banner />

      <div className="my-16 container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Full Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books?.map((book: IBook) => (
            <BookCard key={book._id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      </div>

      <HowItWorks />

     
      
      <Testimonials />

      <Faq />
    </>
  );
}