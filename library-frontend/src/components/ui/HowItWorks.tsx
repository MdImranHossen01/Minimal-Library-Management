import { FaSearch, FaBookMedical, FaUndo } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className="w-10 h-10 mx-auto text-blue-600" />,
      title: '1. Discover Books',
      description: 'Browse our extensive collection to find the book you want to read next.',
    },
    {
      icon: <FaBookMedical className="w-10 h-10 mx-auto text-blue-600" />,
      title: '2. Borrow with Ease',
      description: 'Select a book, choose a due date, and borrow it with a single click.',
    },
    {
      icon: <FaUndo className="w-10 h-10 mx-auto text-blue-600" />,
      title: '3. Enjoy and Return',
      description: 'Enjoy your book! The system will track your borrow history for you.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-white p-6 rounded-full shadow-lg inline-block mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}