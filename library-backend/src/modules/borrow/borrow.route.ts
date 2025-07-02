import express from 'express';
import { BorrowController } from './borrow.controller';

const router = express.Router();

router.post('/borrow', BorrowController.borrowBook);
router.get('/borrow-summary', BorrowController.getBorrowSummary);

export const BorrowRoutes = router;