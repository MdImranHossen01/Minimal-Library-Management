import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 px-4 text-center rounded-lg shadow-xl mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        Welcome to Your Digital Library
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Discover, manage, and borrow books with ease. Your next great read is just a click away.
      </p>
      <Link
        to="/create-book"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add a New Book
      </Link>
    </div>
  );
}