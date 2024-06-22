// src/App.js

import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import axios from 'axios';

const App = () => {
  const [editingBook, setEditingBook] = useState(null);

  const addBook = async (book) => {
    try {
      await axios.post('https://api.example.com/books', book);
      // Reload the page or update the state to reflect the new book
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const editBook = async (book) => {
    try {
      await axios.put(`https://api.example.com/books/${book.id}`, book);
      // Reload the page or update the state to reflect the edited book
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`https://api.example.com/books/${id}`);
      // Reload the page or update the state to reflect the deleted book
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleFormSubmit = (book) => {
    if (editingBook) {
      editBook({ ...editingBook, ...book });
    } else {
      addBook(book);
    }
    setEditingBook(null);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <BookForm onSubmit={handleFormSubmit} initialData={editingBook} />
      <BookList onEdit={handleEdit} onDelete={deleteBook} />
    </div>
  );
};

export default App;
