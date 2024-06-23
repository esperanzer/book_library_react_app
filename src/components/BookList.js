// src/components/BookList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';

const BookList = ({ onEdit, onDelete }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/book');
      // ('https://api.example.com/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
