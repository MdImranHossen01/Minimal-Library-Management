import { Book } from './book.model';

const createBook = async (payload: any) => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async () => {
  const result = await Book.find().sort({ createdAt: -1 });
  return result;
};

const getSingleBook = async (id: string) => {
    const result = await Book.findById(id);
    return result;
}

const updateBook = async (id: string, payload: any) => {
  const result = await Book.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBook = async (id: string) => {
  await Book.findByIdAndDelete(id);
  return null;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};