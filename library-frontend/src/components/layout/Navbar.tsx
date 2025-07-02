import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBookOpen, FaBars, FaTimes } from 'react-icons/fa';
import { clsx } from 'clsx';

// Define navigation links in an array for easy maintenance
const navLinks = [
  { href: '/', text: 'All Books', end: true },
  { href: '/create-book', text: 'Add Book' },
  { href: '/borrow-summary', text: 'Borrow Summary' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define styles in a reusable function for cleaner NavLink components
  const getLinkClassName = ({ isActive }) => {
    return clsx(
      'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300',
      {
        'bg-gray-900 text-white': isActive,
        'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive,
      }
    );
  };
  
  // Renders a single navigation link item
  const renderNavLink = (link) => (
    <NavLink
      key={link.href}
      to={link.href}
      className={getLinkClassName}
      onClick={() => setIsMenuOpen(false)} // Close menu on link click
      end={link.end}
    >
      {link.text}
    </NavLink>
  );

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center text-white text-xl font-bold">
            <FaBookOpen className="mr-3 h-6 w-6" />
            <span>LibraryMS</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(renderNavLink)}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx('md:hidden transition-all duration-300 ease-in-out', {
          'max-h-screen': isMenuOpen,
          'max-h-0': !isMenuOpen,
          'overflow-hidden': true,
        })}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          {navLinks.map(renderNavLink)}
        </div>
      </div>
    </nav>
  );
}