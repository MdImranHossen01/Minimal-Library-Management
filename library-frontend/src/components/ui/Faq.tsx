import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'How do I borrow a book?',
    answer: 'Simply find the book you want in our collection and click the "Borrow" icon. You will be prompted to select a due date, and the book will be added to your borrowed list.',
  },
  {
    question: 'Is there a limit to how many books I can borrow?',
    answer: 'In this minimal system, there is no hard limit on the number of different books you can borrow. However, you cannot borrow more copies of a single book than are currently available.',
  },
  {
    question: 'How do I add a new book to the library?',
    answer: 'Navigate to the "Add Book" page using the link in the main navigation. Fill out the form with the book\'s details, including title, author, genre, and number of copies, then submit.',
  },
  {
    question: 'Can I edit the details of a book after adding it?',
    answer: 'Yes! On the book card, click the "Edit" icon. This will take you to a form pre-filled with the book\'s current information, which you can modify and save.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left p-6 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <FaMinus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <FaPlus className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </button>
              {/* This div controls the expand/collapse animation */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}