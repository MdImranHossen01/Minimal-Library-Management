import { useGetBooksQuery, useDeleteBookMutation } from '@/features/book/bookApi';
import { IBook } from '@/types';
import toast from 'react-hot-toast';
import Banner from '@/components/ui/Banner';
import BookCard from '@/components/ui/BookCard';
import FeaturedBooks from '@/components/ui/FeaturedBooks'; // Import new component
import HowItWorks from '@/components/ui/HowItWorks';       // Import new component
import Testimonials from '@/components/ui/Testimonials';   // Import new component
import Faq from '@/components/ui/Faq';

export default function BookList() {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id).unwrap();
        toast.success('Book deleted successfully');
      } catch (error) {
        toast.error('Failed to delete book');
      }
    }
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error fetching data.</div>;

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
        {/* How It Works Section */}
      <HowItWorks />
      {/* Testimonials Section */}
      <Testimonials />
      <Faq></Faq>
    </>
  );
}