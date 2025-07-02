export default function Testimonials() {
  const testimonials = [
    {
      quote: "This library system is so easy to use! I found and borrowed a book in minutes. The card layout is fantastic.",
      name: 'Sarah J.',
      title: 'Avid Reader',
    },
    {
      quote: "Managing our community library has never been simpler. Adding new books and tracking borrows is a breeze.",
      name: 'Michael B.',
      title: 'Librarian',
    },
    {
      quote: "A clean, fast, and beautiful interface. It makes discovering new books a real pleasure. Highly recommended!",
      name: 'Emily R.',
      title: 'Book Club Member',
    },
  ];

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-right">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}