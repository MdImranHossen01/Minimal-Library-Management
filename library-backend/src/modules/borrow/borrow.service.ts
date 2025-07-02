import { Book } from '../book/book.model';
import { Borrow } from './borrow.model';

const borrowBook = async (payload: any) => {
  const { bookId, quantity, dueDate } = payload;

  const book = await Book.findById(bookId);
  if (!book) {
    throw new Error('Book not found');
  }
  if (book.copies < quantity) {
    throw new Error('Not enough copies available');
  }

  book.copies -= quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();

  const borrow = await Borrow.create({ book: bookId, quantity, dueDate });
  return borrow;
};

const getBorrowSummary = async () => {
  const result = await Borrow.aggregate([
    {
      $lookup: {
        from: 'books',
        localField: 'book',
        foreignField: '_id',
        as: 'bookDetails'
      }
    },
    { $unwind: '$bookDetails' },
    {
      $group: {
        _id: '$book',
        title: { $first: '$bookDetails.title' },
        isbn: { $first: '$bookDetails.isbn' },
        totalBorrowed: { $sum: '$quantity' },
      },
    },
    {
        $project: {
            _id: 0,
            bookId: '$_id',
            title: 1,
            isbn: 1,
            totalBorrowed: 1
        }
    }
  ]);
  return result;
};

export const BorrowService = {
  borrowBook,
  getBorrowSummary,
};