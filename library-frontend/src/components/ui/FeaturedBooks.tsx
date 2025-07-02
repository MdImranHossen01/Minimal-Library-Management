import { IBook } from '@/types';
import BookCard from './BookCard';

interface FeaturedBooksProps {
  books: IBook[];
  onDelete: (id: string) => void;
}

export default function FeaturedBooks({ books, onDelete }: FeaturedBooksProps) {
  // We'll feature the first 4 books, or fewer if not available
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Featured Books</h2>
      <p className="text-center text-gray-500 mb-8">Handpicked selections from our collection.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredBooks.map((book) => (
          <BookCard key={book._id} book={book} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}