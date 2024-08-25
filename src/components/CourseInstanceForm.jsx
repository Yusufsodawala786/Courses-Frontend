import React, { useState } from 'react';
import axios from 'axios';

const CourseInstanceForm = ({ fetchInstances }) => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInstance = { year, semester, courseId };
    await axios.post('/api/instances', newInstance);
    fetchInstances();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Year</label>
        <input value={year} onChange={(e) => setYear(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Semester</label>
        <input value={semester} onChange={(e) => setSemester(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Course ID</label>
        <input value={courseId} onChange={(e) => setCourseId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Instance</button>
    </form>
  );
};

export default CourseInstanceForm;
