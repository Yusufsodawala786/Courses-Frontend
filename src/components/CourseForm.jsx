// src/components/CourseForm.js
import React, { useState } from 'react';
import { createCourse } from '../services/api';

const CourseForm = ({ onAddCourse }) => {
  const [title, setTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCourse = await createCourse({ title, courseCode, description });
    onAddCourse(newCourse);
    setTitle('');
    setCourseCode('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">Add Course</h3>
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Course Code"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
