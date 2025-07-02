import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import BookList from '../pages/BookList';
import AddBook from '../pages/AddBook';
import EditBook from '../pages/EditBook';
import BorrowBook from '../pages/BorrowBook';
import BorrowSummary from '../pages/BorrowSummary';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <BookList />,
      },
      {
        path: '/create-book',
        element: <AddBook />,
      },
      {
        path: '/edit-book/:id',
        element: <EditBook />,
      },
      {
        path: '/borrow/:id',
        element: <BorrowBook />,
      },
      {
        path: '/borrow-summary',
        element: <BorrowSummary />,
      },
    ],
  },
  {
      path: '*',
      element: <NotFound />
  }
]);

export default router;