import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
}