import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  copies: { type: Number, required: true, min: 0 },
  available: { type: Boolean, default: true },
  imageUrl: { type: String, required: false }, // <-- ADD THIS LINE
}, { timestamps: true });

export const Book = model('Book', bookSchema);