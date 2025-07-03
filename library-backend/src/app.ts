import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { BookRoutes } from './modules/book/book.route';
import { BorrowRoutes } from './modules/borrow/borrow.route';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors({
  // Add your mibd.shop domain to this list
  origin: [
    'http://localhost:5173',
    'https://library-frontend-orcin.vercel.app',
    'https://library-frontend-mocha.vercel.app',
    'https://mibd.shop',
    'https://www.mibd.shop'
  ]
}));

// Application Routes
app.use('/api', BookRoutes);
app.use('/api', BorrowRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Library Management System API is running!');
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;