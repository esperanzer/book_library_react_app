// src/components/BookForm.js

import React from 'react';
import { useForm } from 'react-hook-form';

const BookForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || { title: '', author: '', isbn: '' },
  });

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Title</label>
        <input {...register('title', { required: true })} />
      </div>
      <div>
        <label>Author</label>
        <input {...register('author', { required: true })} />
      </div>
      <div>
        <label>ISBN (optional)</label>
        <input {...register('isbn')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
