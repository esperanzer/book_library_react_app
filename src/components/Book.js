// src/components/Book.js

import React from 'react';

const Book = ({ book, onEdit, onDelete }) => {
  return (
    <li>
      <span>{book.title} by {book.author} (ISBN: {book.isbn || 'N/A'})</span>
      <button onClick={() => onEdit(book)}>Edit</button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </li>
  );
};

export default Book;
