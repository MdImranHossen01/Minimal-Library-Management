import { useGetSingleBookQuery, useUpdateBookMutation } from '@/features/book/bookApi';
import { IBook } from '@/types';
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditBook() {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading: isFetching } = useGetSingleBookQuery(id!);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<IBook>>({});

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        genre: book.genre,
        description: book.description,
        copies: book.copies,
        imageUrl: book.imageUrl, // <-- ADD THIS
      });
    }
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'copies' ? Number(value) : value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
        await updateBook({ id: id!, body: formData }).unwrap();
        toast.success('Book updated successfully!');
        navigate('/');
    } catch (error) {
        toast.error('Failed to update book.');
    }
  };

  if(isFetching) return <div>Loading form...</div>

  return (
    <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Book: {book?.title}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
             <input name="title" value={formData.title || ''} onChange={handleChange} placeholder="Title" required className="w-full p-2 border"/>
            <input name="author" value={formData.author || ''} onChange={handleChange} placeholder="Author" required className="w-full p-2 border"/>
            <input name="genre" value={formData.genre || ''} onChange={handleChange} placeholder="Genre" required className="w-full p-2 border"/>
            <textarea name="description" value={formData.description || ''} onChange={handleChange} placeholder="Description" required className="w-full p-2 border"></textarea>
            <input type="number" name="copies" value={formData.copies || 0} onChange={handleChange} placeholder="Copies" required className="w-full p-2 border" min="0"/>
            <input name="imageUrl" value={formData.imageUrl || ''} onChange={handleChange} placeholder="Image URL (optional)" className="w-full p-2 border"/> {/* <-- ADD THIS LINE */}
            <button type="submit" disabled={isUpdating} className="w-full bg-blue-500 text-white p-2 rounded">
                {isUpdating ? 'Updating...' : 'Update Book'}
            </button>
        </form>
    </div>
  );
}