import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCourse = { title, code, description };
    await axios.post('/api/courses', newCourse);
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Course Title</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Course Code</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Course Description</label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Course</button>
    </form>
  );
};

export default CourseForm;
