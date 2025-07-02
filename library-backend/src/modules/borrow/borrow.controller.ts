import { Request, Response, NextFunction } from 'express';
import { BorrowService } from './borrow.service';

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

const borrowBook = handleRequest(async (req) => {
  const data = await BorrowService.borrowBook(req.body);
  return { message: 'Book borrowed successfully', data };
});

const getBorrowSummary = handleRequest(async (req) => {
  const data = await BorrowService.getBorrowSummary();
  return { message: 'Borrow summary retrieved successfully', data };
});

export const BorrowController = {
  borrowBook,
  getBorrowSummary,
};