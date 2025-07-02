import { Request, Response, NextFunction } from 'express';
import { BookService } from './book.service';

const handleRequest = (handler: (req: Request) => Promise<any>) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await handler(req);
    res.status(result.statusCode || 200).json({
      success: true,
      message: result.message,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};

const createBook = handleRequest(async (req) => {
  const data = await BookService.createBook(req.body);
  return { message: 'Book created successfully', data };
});

const getAllBooks = handleRequest(async (req) => {
  const data = await BookService.getAllBooks();
  return { message: 'Books retrieved successfully', data };
});

const getSingleBook = handleRequest(async (req) => {
    const data = await BookService.getSingleBook(req.params.id);
    return { message: 'Book retrieved successfully', data };
});

const updateBook = handleRequest(async (req) => {
  const data = await BookService.updateBook(req.params.id, req.body);
  return { message: 'Book updated successfully', data };
});

const deleteBook = handleRequest(async (req) => {
  await BookService.deleteBook(req.params.id);
  return { statusCode: 200, message: 'Book deleted successfully', data: null };
});


export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};