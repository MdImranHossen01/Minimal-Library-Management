import { useAddBookMutation } from '@/features/book/bookApi';
import { IBook } from '@/types';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<IBook>>({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
    imageUrl: '', // <-- ADD THIS
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'copies' ? Number(value) : value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
        await addBook(formData).unwrap();
        toast.success('Book added successfully!');
        navigate('/');
    } catch (error) {
        toast.error('Failed to add book.');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="title" onChange={handleChange} placeholder="Title" required className="w-full p-2 border"/>
            <input name="author" onChange={handleChange} placeholder="Author" required className="w-full p-2 border"/>
            <input name="genre" onChange={handleChange} placeholder="Genre" required className="w-full p-2 border"/>
            <input name="isbn" onChange={handleChange} placeholder="ISBN" required className="w-full p-2 border"/>
            <textarea name="description" onChange={handleChange} placeholder="Description" required className="w-full p-2 border"></textarea>
            <input type="number" name="copies" onChange={handleChange} placeholder="Copies" required className="w-full p-2 border" min="1"/>
            <input name="imageUrl" onChange={handleChange} placeholder="Image URL (optional)" className="w-full p-2 border"/> {/* <-- ADD THIS LINE */}
            <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white p-2 rounded">
                {isLoading ? 'Adding...' : 'Add Book'}
            </button>
        </form>
    </div>
  );
}