import { Link } from 'react-router-dom';
import { IBook } from '@/types';
import { FaEdit, FaTrash, FaBookMedical } from 'react-icons/fa';

interface BookCardProps {
  book: IBook;
  onDelete: (id: string) => void;
}

export default function BookCard({ book, onDelete }: BookCardProps) {
  // Generate a placeholder image URL with the book title
  const placeholderImage = `https://placehold.co/600x400/EEE/31343C?text=${encodeURIComponent(book.title)}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      {/* Image Section */}
      <img
        src={book.imageUrl || placeholderImage}
        alt={`Cover of ${book.title}`}
        className="w-full h-56 object-cover"
        // Fallback to placeholder if the provided image URL fails to load
        onError={(e) => { e.currentTarget.src = placeholderImage; }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-2 truncate" title={book.title}>{book.title}</h3>
          {book.available ? (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Available</span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Out</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
        <p className="text-sm text-gray-500 mb-4">{book.genre}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-700 border-t pt-4 mt-4">
          <span>Copies: <span className="font-semibold">{book.copies}</span></span>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
        <Link to={`/edit-book/${book._id}`} title="Edit" className="text-gray-500 hover:text-blue-600">
          <FaEdit />
        </Link>
        <button onClick={() => onDelete(book._id)} title="Delete" className="text-gray-500 hover:text-red-600">
          <FaTrash />
        </button>
        <Link to={`/borrow/${book._id}`} title="Borrow" className="text-gray-500 hover:text-green-600">
          <FaBookMedical />
        </Link>
      </div>
    </div>
  );
}