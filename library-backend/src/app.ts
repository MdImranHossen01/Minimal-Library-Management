import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { BookRoutes } from './modules/book/book.route';
import { BorrowRoutes } from './modules/borrow/borrow.route';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api', BookRoutes);
app.use('/api', BorrowRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Library Management System API is running!');
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;