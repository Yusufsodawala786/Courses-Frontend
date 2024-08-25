// src/components/CourseInstanceForm.js
import React, { useState } from 'react';
import { createCourseInstance } from '../services/api';

const CourseInstanceForm = ({ onAddInstance }) => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInstance = await createCourseInstance({ year, semester, course: { id: courseId } });
    onAddInstance(newInstance);
    setYear('');
    setSemester('');
    setCourseId('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-2">Add Course Instance</h3>
      <input
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Instance
      </button>
    </form>
  );
};

export default CourseInstanceForm;
