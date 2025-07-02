import { Link } from 'react-router-dom';
import { FaBookOpen, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Branding Section */}
          <div>
            <Link to="/" className="inline-flex items-center justify-center md:justify-start mb-4">
              <FaBookOpen className="h-8 w-8 mr-3 text-white" />
              <span className="text-2xl font-bold text-white">LibraryMS</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your personal digital library. Manage and borrow books with ease.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">All Books</Link></li>
              <li><Link to="/create-book" className="hover:text-white transition-colors">Add Book</Link></li>
              <li><Link to="/borrow-summary" className="hover:text-white transition-colors">Borrow Summary</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Library Management System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}